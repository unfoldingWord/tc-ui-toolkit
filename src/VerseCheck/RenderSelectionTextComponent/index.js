import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'deep-equal';
// helpers
import * as windowSelectionHelpers from '../helpers/windowSelectionHelpers';
import * as selectionHelpers from '../helpers/selectionHelpers';
import * as stringHelpers from '../helpers/stringHelpers';

const DBL_CLK_TIME = 1500;
const DBL_CLK_DISTANCE = 4;

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

  /**
   * get new selected text and update selections
   * @param {String} verseText
   * @param {Object} event
   */
  getSelectionText(verseText, event) {
    const selection = windowSelectionHelpers.getSelectionFromCurrentWindowSelection(verseText);
    console.log(`getSelectionText() - selection ${JSON.stringify(selection)}`);

    if (event) {
      console.log(`getSelectionText() - event ${event}`, event);
    }
    this.addSelection(selection);
  }

  /**
   * keep track of mouse down event for double click calculations
   * @param {String} verseText
   * @param {Object} event
   */
  recordMouseDown(event) {
    this.lastMouseDnEvent = this.mouseDnEvent; // need two mouse down events for double click calcs
    this.mouseDnEvent = { ...event }; // shallow copy
    console.log(`recordMouseDown() - this.mouseDnEvent.time = ${this.mouseDnEvent.time}`);

    if (this.lastMouseDnEvent) {
      const delta = this.mouseDnEvent.timeStamp - this.lastMouseDnEvent.timeStamp;
      console.log(`recordMouseDown() - time between clicks = ${delta}`);

      if (delta < DBL_CLK_TIME) {
        console.log(`recordMouseDown() - Double click time`);
      }

      const deltaX = this.mouseDnEvent.clientX - this.lastMouseDnEvent.clientX;
      console.log(`recordMouseDown() - x distance between clicks = ${deltaX}`);

      if (Math.abs(deltaX) < DBL_CLK_DISTANCE) {
        console.log(`recordMouseDown() - Double X`);
      }

      const deltaY = this.mouseDnEvent.clientY - this.lastMouseDnEvent.clientY;
      console.log(`recordMouseDown() - x distance between clicks = ${deltaY}`);

      if (Math.abs(deltaY) < DBL_CLK_DISTANCE) {
        console.log(`recordMouseDown() - Double Y`);
      }
    }
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
      <div
        onMouseUp={(e) => this.getSelectionText(verseText, e)}
        onMouseDown={(e) => this.recordMouseDown(e)}
        onMouseLeave={() => this.inDisplayBox(false)}
        onMouseEnter={() => this.inDisplayBox(true)}>
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
