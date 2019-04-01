import React from 'react';
import PropTypes from 'prop-types';

import './CheckInfoCard.styles.css';
import {getOffset} from './helpers';


const CheckInfoCard = ({
  title,
  phrase,
  seeMoreLabel,
  onSeeMoreClick,
  showSeeMoreButton,
  getScriptureFromReference
}) => {
  /** @type HTMLElement */
  let scriptureRef;
  let popOverRef;
  let phraseWithPopover;
  const rcMatch = phrase.match(/\[(\w+.+:\d+)]\(rc:\/\/(\w+)\/(\w+)\/book\/(\w+)\/(\d+)\/(\d+)\)/) || [];
  const showPopover = rcMatch.length > 0;
  if (showPopover) {
    const [wholeMatch, referenceText , lang, id, book, chapter, verse] = rcMatch;
    const [preReference, postReference] = phrase.split(wholeMatch);
    const popoverLabel = getScriptureFromReference(lang, id, book, chapter, verse);
    phraseWithPopover = (<div>
      {preReference}
      <span onMouseEnter={() => {
        const {top, left} = getOffset(scriptureRef);
        popOverRef.style.top = `${top}px`;
        popOverRef.style.left = `${left}px`;
        popOverRef.style.width = `${scriptureRef.offsetWidth}px`;
        popOverRef.style.height = `${scriptureRef.offsetHeight}px`;
      }} style={{position: 'relative'}}>
        <div ref={(ref) => popOverRef = ref} aria-label={popoverLabel} className="hint--top hint--medium" style={{
          position: 'fixed'
        }} />
        <span style={{
          whiteSpace: 'nowrap',
          textDecoration: 'underline'
        }} ref={(ref) => scriptureRef = ref}>{referenceText}</span>
      </span>
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
