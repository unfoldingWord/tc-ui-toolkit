import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './ChapterView.styles.css';

// components
import BibleHeadingsRow from './BibleHeadingsRow';
import VerseRow from './VerseRow';

class ChapterView extends Component {
  render () {
    return (
      <div>
        <div className="bible-heading-container">
            <BibleHeadingsRow />
          <div className="verse-row-container">
            <VerseRow />
          </div>
        </div>
      </div>
    )
  }
}

export default ChapterView;
