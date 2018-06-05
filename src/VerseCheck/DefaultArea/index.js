import React from 'react';
import PropTypes from 'prop-types';
// helpers
import {
  selectionArray,
  occurrencesInString,
  normalizeString
} from '../utils/selectionHelpers';
// components
import {Glyphicon} from 'react-bootstrap';
import MyLanguageModal from '../MyLanguageModal';
// styling
import '../VerseCheck.styles.css';

class DefaultArea extends React.Component {
  constructor() {
    super();
    this.state = {
      inBox: false,
      modalVisibility: false
    };
  }

  displayText(verseText, selections) {
    // normalize whitespace for text rendering in order to display highlights with more than one space since html selections show one space
    verseText = normalizeString(verseText);
    let verseTextSpans = <span>{verseText}</span>;
    if (selections && selections.length > 0) {
      let _selectionArray = selectionArray(verseText, selections);
      selections.forEach(selection => {
        if (occurrencesInString(verseText, selection.text) !== selection.occurrences) {
          // validate selections and remove ones that do not apply
          this.props.actions.validateSelections(verseText);
        }
      });
      verseTextSpans = _selectionArray.map((selection, index) => {
        let style = selection.selected ? {backgroundColor: 'var(--highlight-color)'} : {};
        return (
          <span key={index} style={style}>
            {selection.text}
          </span>
        );
      });
    }
    return (
      <div style={{userSelect: 'none', color: 'var(--text-color-light)'}}>
        {verseTextSpans}
      </div>
    );
  }

  render() {
    const {
      manifest,
      translate,
      reference,
      verseText,
      selections,
      bibles
    } = this.props;
    const {target_language, project} = manifest;
    const bookName = target_language && target_language.book && target_language.book.name ?
      target_language.book.name : project.name;
    const languageName = manifest.target_language ? manifest.target_language.name : null;
    const dir = manifest.target_language ? manifest.target_language.direction : null;

    return (
      <div style={{WebkitUserSelect: 'none', flex: 1, display: 'flex', flexDirection: 'column'}}>
        <div className='verse-title'>
          <div className='pane' style={{display: 'flex', flexDirection: 'column'}}>
            <span className='verse-title-title'>
              {languageName}
            </span>
            <span className='verse-title-subtitle'>
              {bookName} {reference.chapter + ':' + reference.verse}
            </span>
          </div>
          <div onClick={() => {this.setState({modalVisibility: true})}}>
            <Glyphicon glyph="fullscreen" title={translate("click_show_expanded")} style={{cursor: "pointer"}} />
          </div>
          <MyLanguageModal
            translate={translate}
            manifest={manifest}
            show={this.state.modalVisibility}
            targetLangBible={bibles.targetLanguage.targetBible}
            chapter={reference.chapter}
            currentVerse={reference.verse}
            dir={dir ? dir : "ltr"}
            onHide={() => this.setState({modalVisibility: false})}
          />
        </div>
        <div className={manifest.target_language.direction === 'ltr' ? 'ltr-content' : 'rtl-content'}>
          {this.displayText(verseText, selections)}
        </div>
      </div>
    );
  }
}

DefaultArea.propTypes = {
  translate: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    validateSelections: PropTypes.func,
  }).isRequired,
  reference: PropTypes.object,
  bibles: PropTypes.object.isRequired,
  manifest: PropTypes.object,
  selections: PropTypes.array,
  verseText: PropTypes.string.isRequired,
};

export default DefaultArea;
