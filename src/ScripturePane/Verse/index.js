import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Verse.styles.css';

// constants
const PLACE_HOLDER_TEXT = '[WARNING: This Bible version does not include text for this reference.]';

// const VerseString = ({ verseText, verseIsPlaceHolder }) => {
//   verseText = verseText.replace(/\s+/g, ' ');
//   let verseTextSpans = (
//     <span className={verseIsPlaceHolder ? 'placeholder-text' : null}>
//       {verseText}
//     </span>
//   );

//   return verseTextSpans;
// }

// const VerseArray = ({ verseText }) => {
//   verseText = verseText || [];

//   return null;
// }


class Verse extends Component {
  render () {
    const {
      verseElements,
      bibleId,
      direction,
      chapter,
      verse
    } = this.props;
    const verseIsPlaceHolder = !verseElements;
    const chapterVerseContent = direction === 'rtl' ? `${verse}:${chapter} ` : `${chapter}:${verse} `;
    const chapterVerse = <strong>{chapterVerseContent}</strong>;
    const isEditable = bibleId === 'targetBible';
    // let text = verseText;
    let verseSpan = verseElements;

    if (verseIsPlaceHolder) {
      verseSpan = (
        <span className='placeholder-text'>
          {PLACE_HOLDER_TEXT}
        </span>
      );
    }

    // if (text && typeof text === 'string') { // if the verse content is string / text.
    //   verseSpan = <VerseString verseText={text} verseIsPlaceHolder={verseIsPlaceHolder} />;
    // } else { // then the verse content is an array / verse objects.
    //   verseSpan = <VerseArray verseText={text} />;
    // }

    return (
      <div className="verse-container">
        <div className={direction === 'ltr' ? 'verse-content-ltr' : 'verse-content-rtl'}>
          {chapterVerse}
          {verseSpan}
        </div>
      </div>
    )
  }
}

Verse.propTypes = {
  verseElements: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
  bibleId: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  verse: PropTypes.number.isRequired,
};

export default Verse;
