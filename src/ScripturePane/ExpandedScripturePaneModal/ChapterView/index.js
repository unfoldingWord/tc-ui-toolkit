/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './ChapterView.styles.css';

// components
import { getReferenceStr, getTitleStr } from '../../helpers/utils';
import VerseEditorDialog from '../../../VerseEditor';
import VerseRow from './VerseRow';

class ChapterView extends Component {
  componentDidMount() {
    let { chapter, verse } = this.props.contextId.reference;
    let verseReference = ChapterView.makeRefKey(chapter, verse);
    let currentVerse = this.verseRefs[verseReference];
    let element = ReactDOM.findDOMNode(currentVerse);

    if (element) {
      element.scrollIntoView();
    }
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

  componentWillUnmount() {
    this.verseRefs = {};
  }

  render() {
    const {
      contextId,
      currentPaneSettings,
      projectDetailsReducer,
      translate,
      bibles,
      selections,
      getLexiconData,
      showPopover,
      handleEditTargetVerse,
      handleEditorSubmit,
      handleEditorCancel,
    } = this.props;

    const { chapter, verse } = contextId.reference;
    const verseNumbers = Object.keys(bibles['en']['ult'][chapter]);
    this.verseRefs = {};
    let verseRows = [];

    if (verseNumbers.length > 0) {
      for (let i = 0, len = verseNumbers.length; i < len; i++) {
        const verseNumber = verseNumbers[i];
        const refKey = ChapterView.makeRefKey(chapter, verseNumber);

        verseRows.push(
          <VerseRow
            translate={translate}
            key={verseNumber.toString()}
            chapter={chapter}
            verse={verse}
            bibles={bibles}
            contextId={contextId}
            selections={selections}
            showPopover={showPopover}
            getLexiconData={getLexiconData}
            currentVerseNumber={verseNumber}
            currentPaneSettings={currentPaneSettings}
            onEditTargetVerse={handleEditTargetVerse}
            ref={node => this.verseRefs[refKey] = node} />,
        );
      }
    }

    const { editVerse } = this.props;
    const manifest = projectDetailsReducer.manifest;
    const openEditor = editVerse !== null;
    let verseTitle = '';
    let verseText = '';
    const direction = manifest && manifest.target_language && manifest.target_language.direction || 'ltr';

    if (openEditor) {
      let bookName = manifest.target_language.book.name;

      if (bookName === null) {
        console.warn('The localized book name could not be found. This is likely a bug in tC.');
        bookName = manifest.project.name;
      }

      const refStr = getReferenceStr(editVerse.chapter, editVerse.verse, direction);
      verseTitle = getTitleStr(bookName, refStr, direction);
      verseText = editVerse.verseText;
    }

    return (
      <div>
        <div className="verse-row-container">
          {verseRows}
        </div>
        <VerseEditorDialog translate={translate}
          onSubmit={handleEditorSubmit}
          open={openEditor}
          onCancel={handleEditorCancel}
          verseText={verseText}
          verseTitle={verseTitle}
          direction={direction}
        />
      </div>
    );
  }
}

ChapterView.propTypes = {
  contextId: PropTypes.object.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  editTargetVerse: PropTypes.func.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  bibles: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
  editVerse: PropTypes.object,
  handleEditTargetVerse: PropTypes.func.isRequired,
  handleEditorSubmit: PropTypes.func.isRequired,
  handleEditorCancel: PropTypes.func.isRequired,
};

export default ChapterView;
