import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {verseString, verseArray} from '../helpers/verseHelpers';
import './Verse.styles.css';
import {isEqual} from 'lodash';

const styles = {
  edit_wrapper: {
    textAlign: 'right'
  },
  edit_button: {
    padding: 0,
    width: 28,
    height: 28
  }
};

class Verse extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (!isEqual(nextProps.verseData, this.props.verseData)) {
      return true;
    }
    if (!isEqual(nextProps.bibleId, this.props.bibleId)) {
      return true;
    } 
    if (!isEqual(nextProps.contextId, this.props.contextId)) {
      return true;
    } 
    if (!isEqual(nextProps.selections, this.props.selections)) {
      return true;
    } else return false;
  }

  handleEdit() {
    const {bibleId, chapter, verse, verseData, onEdit} = this.props;
    if (typeof onEdit === 'function') {
      onEdit(bibleId, chapter, verse, verseData);
    }
  }

  render () {
    const {
      selections,
      contextId,
      getLexiconData,
      showPopover,
      verseData,
      bibleId,
      direction,
      chapter,
      verse,
      onEdit,
      translate,
      setFontSize
    } = this.props;
    const chapterVerseContent = `${chapter}:${verse} `;
    const chapterVerse = <strong>{chapterVerseContent}</strong>;
    const isEditable = bibleId === 'targetBible';
    let verseElements;
    if (typeof verseData === 'string') { // if the verse content is string.
      verseElements = verseString(verseData, selections, translate, setFontSize);
    } else if (verseData) { // else the verse content is an array of verse objects.
      verseElements = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate, setFontSize);
    }
    let verseSpan = verseElements;

    if (!verseElements) {
      verseSpan = (
        <span className='placeholder-text'>
          {translate('pane.missing_verse_warning')}
        </span>
      );
    }

    let edit = null;
    if(isEditable && onEdit) {
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
  verseData: PropTypes.oneOfType([
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
  selections: PropTypes.array.isRequired,
  contextId: PropTypes.object.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
  setFontSize: PropTypes.func
};

export default Verse;
