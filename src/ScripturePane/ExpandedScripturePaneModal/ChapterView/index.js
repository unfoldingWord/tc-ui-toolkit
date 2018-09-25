/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './ChapterView.styles.css';

// components
import VerseRow from './VerseRow';
import VerseEditorDialog from '../../../VerseEditor';

class ChapterView extends Component {
  constructor(props) {
    super(props);
    this.handleEditTargetVerse = this.handleEditTargetVerse.bind(this);
    this.handleEditorCancel = this.handleEditorCancel.bind(this);
    this.handleEditorSubmit = this.handleEditorSubmit.bind(this);
    this.state = {
      editVerse: null
    };
  }

  componentDidMount() {
    let { chapter, verse } = this.props.contextId.reference;
    let verseReference = ChapterView.makeRefKey(chapter, verse);
    let currentVerse = this.verseRefs[verseReference];
    let element = ReactDOM.findDOMNode(currentVerse);
    if (element) element.scrollIntoView();
  }

  /**
   * Generates a key to use for verse ref's
   * @param chapter
   * @param verse
   * @return {string}
   */
  static makeRefKey(chapter, verse) {
    return `c${chapter.toString()}v${verse.toString()}`;
  }

   /**
   * Handles events to edit the target verse
   * @param bibleId
   * @param chapter
   * @param verse
   * @param verseText
   */
  handleEditTargetVerse(bibleId, chapter, verse, verseText) {
    this.setState({
      editVerse: {
        bibleId,
        chapter,
        verse,
        verseText
      }
    });
  }

  handleEditorSubmit(originalVerse, newVerse, reasons) {
    const { editTargetVerse } = this.props;
    const {editVerse} = this.state;
    if(editVerse === null) return;
    const {chapter, verse} = editVerse;
    if(typeof editTargetVerse === 'function') {
      editTargetVerse(chapter, verse, originalVerse, newVerse, reasons);
    } else {
      console.warn('Unable to edit verse. Callback is not a function.');
    }
    this.setState({
      editVerse: null
    });
  }

  handleEditorCancel() {
    this.setState({
      editVerse: null
    });
  }

  render () {
    const {
      contextId,
      currentPaneSettings,
      biblesWithHighlightedWords,
      projectDetailsReducer,
      translate,
      bibles,
    } = this.props;
    const { chapter, verse } = contextId.reference;
    const verseNumbers = Object.keys(biblesWithHighlightedWords['en']['ult'].bibleData[chapter]);
    this.verseRefs = {};
    let verseRows = <div/>;

    if (verseNumbers.length > 0) {
      verseRows = [];

      for (let i = 0, len = verseNumbers.length; i < len; i++) {
        const verseNumber = verseNumbers[i];
        const refKey = ChapterView.makeRefKey(chapter, verseNumber);

        verseRows.push(
          <VerseRow
            translate={translate}
            key={verseNumber}
            chapter={chapter}
            verse={verse}
            bibles={bibles}
            currentVerseNumber={verseNumber}
            currentPaneSettings={currentPaneSettings}
            biblesWithHighlightedWords={biblesWithHighlightedWords}
            onEditTargetVerse={this.handleEditTargetVerse}
            ref={node => this.verseRefs[refKey] = node} />
        );
      }
    }

    const { editVerse } = this.state;
    const openEditor = editVerse !== null;
    let verseTitle = '';
    let verseText = '';
    if(openEditor) {
      let bookName = projectDetailsReducer.manifest.target_language.book.name;
      if(bookName === null) {
        console.warn('The localized book name could not be found. This is likely a bug in tC.');
        bookName = projectDetailsReducer.manifest.project.name;
      }
      verseTitle = `${bookName} ${editVerse.chapter}:${editVerse.verse}`;
      verseText = editVerse.verseText;
    }

    return (
      <div>
        <div className="verse-row-container">
          {verseRows}
        </div>
        <VerseEditorDialog translate={translate}
                           onSubmit={this.handleEditorSubmit}
                           open={openEditor}
                           onCancel={this.handleEditorCancel}
                           verseText={verseText}
                           verseTitle={verseTitle}/>
      </div>
    );
  }
}

ChapterView.propTypes = {
  contextId: PropTypes.object.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  biblesWithHighlightedWords: PropTypes.object.isRequired,
  editTargetVerse: PropTypes.func.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  bibles: PropTypes.object.isRequired,
};

export default ChapterView;
