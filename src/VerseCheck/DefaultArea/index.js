import React from 'react';
import PropTypes from 'prop-types';
// helpers
import { Glyphicon } from 'react-bootstrap';
import { selectionArray, normalizeString } from '../helpers/selectionHelpers';
import { occurrencesInString } from '../helpers/stringHelpers';
// components
import MyLanguageModal from '../MyLanguageModal';
// styling
import '../VerseCheck.styles.css';
import { getFontClassName } from '../../common/fontUtils';

class DefaultArea extends React.Component {
  constructor() {
    super();
    this.state = {
      inBox: false,
      modalVisibility: false,
    };
  }

  displayText(verseText, selections, targetLanguageFont) {
    const { validateSelections } = this.props;
    // normalize whitespace for text rendering in order to display highlights with more than one space since html selections show one space
    verseText = normalizeString(verseText);
    const fontClass = getFontClassName(targetLanguageFont);
    console.log('====================================');
    console.log('DefaultArea displayText fontClass', fontClass);
    console.log('====================================');
    let verseTextSpans = <span className={fontClass}>{verseText}</span>;

    if (selections && selections.length > 0) {
      let _selectionArray = selectionArray(verseText, selections);

      for (let j = 0, len = selections.length; j < len; j++) {
        const selection = selections[j];

        if (occurrencesInString(verseText, selection.text) !== selection.occurrences) {
          // validate selections and remove ones that do not apply
          validateSelections(verseText);
        }
      }

      verseTextSpans = [];

      for (let i = 0, len = _selectionArray.length; i < len; i++) {
        const selection = _selectionArray[i];
        const index = i;
        let style = selection.selected ? { backgroundColor: 'var(--highlight-color)' } : {};

        verseTextSpans.push(
          <span key={index} style={style}>
            {selection.text}
          </span>,
        );
      }
    }
    return (
      <div style={{ userSelect: 'none', color: 'var(--text-color-light)' }}>
        {verseTextSpans}
      </div>
    );
  }

  render() {
    const {
      translate,
      reference,
      verseText,
      selections,
      targetBible,
      bookDetails,
      targetLanguageDetails,
      targetLanguageFont,
    } = this.props;
    const { book, direction } = targetLanguageDetails;
    const bookName = book && book.name ? book.name : bookDetails.name;
    const languageName = targetLanguageDetails.name || null;
    const languageDirection = direction || null;

    console.log('====================================');
    console.log('DefaultArea targetLanguageFont', targetLanguageFont);
    console.log('====================================');

    return (
      <div style={{
        WebkitUserSelect: 'none', flex: 1, display: 'flex', flexDirection: 'column',
      }}>
        <div className='verse-title'>
          <div className='pane' style={{ display: 'flex', flexDirection: 'column' }}>
            <span className='verse-title-title'>
              {languageName}
            </span>
            <span className='verse-title-subtitle'>
              {bookName} {reference.chapter + ':' + reference.verse}
            </span>
          </div>
          <div onClick={() => this.setState({ modalVisibility: true })}>
            <Glyphicon glyph="fullscreen" title={translate('click_show_expanded')} style={{ cursor: 'pointer' }} />
          </div>
          <MyLanguageModal
            translate={translate}
            targetLanguageDetails={targetLanguageDetails}
            show={this.state.modalVisibility}
            targetBible={targetBible}
            chapter={reference.chapter}
            currentVerse={reference.verse}
            languageDirection={languageDirection || 'ltr'}
            bookName={bookName}
            onHide={() => this.setState({ modalVisibility: false })}
          />
        </div>
        <div className={languageDirection === 'ltr' ? 'ltr-content' : 'rtl-content'}>
          {this.displayText(verseText, selections, targetLanguageFont)}
        </div>
      </div>
    );
  }
}

DefaultArea.propTypes = {
  translate: PropTypes.func.isRequired,
  reference: PropTypes.object.isRequired,
  targetBible: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  verseText: PropTypes.string.isRequired,
  validateSelections: PropTypes.func.isRequired,
  bookDetails: PropTypes.object.isRequired,
  targetLanguageDetails: PropTypes.object.isRequired,
  targetLanguageFont: PropTypes.string,
};

export default DefaultArea;
