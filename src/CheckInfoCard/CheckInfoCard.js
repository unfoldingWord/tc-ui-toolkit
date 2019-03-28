import React from 'react';
import PropTypes from 'prop-types';

import './CheckInfoCard.styles.css';

const CheckInfoCard = ({
  title,
  phrase,
  seeMoreLabel,
  onSeeMoreClick,
  showSeeMoreButton,
  getScriptureFromReference
}) => {
  let phraseWithPopover;
  const rcMatch = phrase.match(/\[\w+.+:\d+\]\(rc:\/\/(\w+)\/(\w+)\/book\/(\w+)\/(\d+)\/(\d+)\)/) || [];
  const showPopover = rcMatch.length > 0;
  if (showPopover) {
    // eslint-disable-next-line no-unused-vars
    const [wholeMatch, lang, id, book, chapter, verse] = rcMatch;
    console.log(wholeMatch);
    const [preReference, postReference] = phrase.split(wholeMatch);
    const popoverLabel = getScriptureFromReference(lang, id, book, chapter, verse);
    phraseWithPopover = (<div>
      {preReference}
      <span aria-label={popoverLabel} className="hint--top hint--medium">{wholeMatch}</span>
      {postReference}
    </div>
    );
  }
  return (
    <div className="checkInfo">
      <div className="leftSide">
        <div className="title">
          {title}
        </div>
      </div>
      <div className="rightSide">
        <div className="phrase">
          {phraseWithPopover || phrase}
        </div>
        <div onClick={showSeeMoreButton ? onSeeMoreClick : null} className={showSeeMoreButton ? 'linkActive' : 'linkInactive'}>
          {seeMoreLabel}
        </div>
      </div>
    </div>
  );
};

CheckInfoCard.propTypes = {
  phrase: PropTypes.string,
  title: PropTypes.string,
  seeMoreLabel: PropTypes.string,
  onSeeMoreClick: PropTypes.func,
  showSeeMoreButton: PropTypes.bool,
  getScriptureFromReference: PropTypes.func
};

export default CheckInfoCard;
