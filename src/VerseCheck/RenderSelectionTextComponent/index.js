import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'deep-equal';
// helpers
import * as windowSelectionHelpers from '../helpers/windowSelectionHelpers';
import * as selectionHelpers from '../helpers/selectionHelpers';
import * as stringHelpers from '../helpers/stringHelpers';

class RenderSelectionTextComponent extends Component {
  componentWillMount() {
    // track when the selections change to prevent false clicks of removals
    this.renderTimestamp = Date.now();
  }

  componentWillReceiveProps(nextProps) {
    // track when the selections change to prevent false clicks of removals
    if (!isEqual(this.props.selections, nextProps.selections)) {
      this.renderTimestamp = Date.now();
    }
  }

  getSelectionText(verseText) {
    const selection = windowSelectionHelpers.getSelectionFromCurrentWindowSelection(verseText);
    console.log(`getSelectionText() - selection ${JSON.stringify(selection)}`);
    this.addSelection(selection);
  }

  doubleClick(e) {
    console.log(`doubleClick() - selection ${JSON.stringify(e)}`);
  }

  addSelection(selection) {
    let {
      selections,
      verseText,
      translate,
      openAlertDialog,
      changeSelectionsInLocalState,
    } = this.props;
    console.log(`addSelection() - initial selections ${JSON.stringify(selections)}`);
    selections = selectionHelpers.addSelectionToSelections(selection, selections, verseText);
    console.log(`addSelection() - final selections ${JSON.stringify(selections)}`);

    // this is a good place to preview selections before saved in state
    if (selections.length <= this.props.maximumSelections) {
      changeSelectionsInLocalState(selections);
    } else {
      const message = translate('select_too_many', { maximum: this.props.maximumSelections });
      openAlertDialog(message);
    }
  }

  removeSelection(selection) {
    const {
      selections,
      verseText,
      changeSelectionsInLocalState,
    } = this.props;
    const newSelections = selectionHelpers.removeSelectionFromSelections(selection, selections, verseText);
    changeSelectionsInLocalState(newSelections);
  }

  inDisplayBox(insideDisplayBox) {
    const { verseText } = this.props;
    this.setState({ inBox: insideDisplayBox });

    if (!insideDisplayBox && Math.abs(window.getSelection().extentOffset - window.getSelection().baseOffset) > 0) {
      this.getSelectionText(verseText);
    }
  }

  verseTextSpans(selections, verseText) {
    let verseTextSpans; // return
    const stringSplices = selectionHelpers.selectionsToStringSplices(verseText, selections);

    verseTextSpans = stringSplices.map((stringSplice, index) => {
      const selectMode = (this.props.mode === 'select'); // use selectMode to conditionally use highlight and remove
      let style = { color: 'black' };

      let callback = () => {};

      if (stringSplice.selected) {
        style.backgroundColor = 'var(--highlight-color)';

        if (selectMode) {
          style.cursor = 'pointer'; // only show hand if in select mode
          callback = () => {
            const timePassed = Date.now() - this.renderTimestamp; // see how long between now and last selection
            const isRealClick = timePassed > 100; // if the click happened quicker than 100ms, it was likely false click

            if (isRealClick) {
              this.removeSelection(stringSplice);
            } // actually remove since it was likely a real click
          };
        }
      }

      const { targetLanguageFontClassName } = this.props;

      return (
        <span key={index} className={targetLanguageFontClassName} style={style} onClick={callback}>
          {stringSplice.text}
        </span>
      );
    });
    return verseTextSpans;
  }

  render() {
    let {
      verseText, selections, targetLanguageFontClassName,
    } = this.props;
    // normalize whitespace for text rendering in order to display highlights with more than one space since html selections show one space
    verseText = stringHelpers.normalizeString(verseText);
    let verseTextSpans = <span className={targetLanguageFontClassName}>{verseText}</span>;

    if (selections && selections.length > 0) {
      verseTextSpans = this.verseTextSpans(selections, verseText);
    }
    return (
      <div onMouseUp={() => this.getSelectionText(verseText)} onMouseLeave={() => this.inDisplayBox(false)} onMouseEnter={() => this.inDisplayBox(true)}
        onDblClick={(e) => this.doubleClick(e)}>
        {verseTextSpans}
      </div>
    );
  }
}

RenderSelectionTextComponent.propTypes = {
  mode: PropTypes.string.isRequired,
  verseText: PropTypes.string.isRequired,
  selections: PropTypes.array.isRequired,
  translate: PropTypes.func.isRequired,
  maximumSelections: PropTypes.number.isRequired,
  changeSelectionsInLocalState: PropTypes.func.isRequired,
  openAlertDialog: PropTypes.func.isRequired,
  targetLanguageFontClassName: PropTypes.string,
};

export default RenderSelectionTextComponent;
