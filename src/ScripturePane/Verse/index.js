import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import './Verse.styles.css';

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

    return (
      <div className="verse-container">
        <div className={direction === 'ltr' ? 'verse-content-ltr' : 'verse-content-rtl'}>
          {chapterVerse}
          {verseSpan}
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
};

export default Verse;
