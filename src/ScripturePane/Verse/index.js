import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import './Verse.styles.css';
import { getFontClassName } from '../../common/fontUtils';

const styles = {
  edit_wrapper: { textAlign: 'right' },
  edit_button: {
    padding: 0,
    width: 28,
    height: 28,
  },
};

class Verse extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    const {
      bibleId, chapter, verse, verseText, onEdit,
    } = this.props;

    if (typeof onEdit === 'function') {
      onEdit(bibleId, chapter, verse, verseText);
    }
  }

  render() {
    const {
      verseElements,
      bibleId,
      direction,
      chapter,
      verse,
      onEdit,
      translate,
      isTargetBible,
      targetLanguageFont,
    } = this.props;
    const chapterVerseContent = `${chapter}:${verse} `;
    const chapterVerse = <strong>{chapterVerseContent}</strong>;
    const isEditable = bibleId === 'targetBible';
    let verseSpan = verseElements;

    if (!verseElements) {
      verseSpan = (
        <span className='placeholder-text'>
          {translate('pane.missing_verse_warning')}
        </span>
      );
    }

    let edit = null;

    if (isEditable && onEdit) {
      edit = (
        <div style={styles.edit_wrapper}>
          <IconButton style={styles.edit_button} onClick={this.handleEdit}>
            <EditIcon/>
          </IconButton>
        </div>
      );
    }

    const directionClassName = direction === 'ltr' ? 'verse-content-ltr' : 'verse-content-rtl';
    let fontClass = '';

    console.log('====================================');
    console.log('isTargetBible', isTargetBible);
    console.log('====================================');
    console.log('Verse targetLanguageFont', targetLanguageFont);

    if (isTargetBible) {
      fontClass = getFontClassName(targetLanguageFont);
      console.log('====================================');
      console.log('Verse targetLanguageFont', targetLanguageFont);
      console.log('Verse fontClass', fontClass);
      console.log('====================================');
    }

    return (
      <div className="verse-container">
        <div className={directionClassName}>
          {chapterVerse}
          <span className={fontClass}>{verseSpan}</span>
        </div>
        {edit}
      </div>
    );
  }
}

Verse.propTypes = {
  verseText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  verseElements: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  bibleId: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  verse: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onEdit: PropTypes.func,
  translate: PropTypes.func.isRequired,
  isTargetBible: PropTypes.bool,
  targetLanguageFont: PropTypes.string,
};

export default Verse;
