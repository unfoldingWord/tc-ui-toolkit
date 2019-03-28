import React from 'react';
import PropTypes from 'prop-types';

import './CheckInfoCard.styles.css';

function getOffset( el ) {
  var _x = 0;
  var _y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

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
  const rcMatch = phrase.match(/\[\w+.+:\d+\]\(rc:\/\/(\w+)\/(\w+)\/book\/(\w+)\/(\d+)\/(\d+)\)/) || [];
  const showPopover = rcMatch.length > 0;
  if (showPopover) {
    const [wholeMatch, lang, id, book, chapter, verse] = rcMatch;
    const [preReference, postReference] = phrase.split(wholeMatch);
    const popoverLabel = getScriptureFromReference(lang, id, book, chapter, verse);
    phraseWithPopover = (<div>
      {preReference}
      <span onMouseEnter={() => {
        const {top, left} = getOffset(scriptureRef);
        popOverRef.style.top = `${top}px`;
        popOverRef.style.left = `${left}px`;
        popOverRef.style.width = `${scriptureRef.offsetWidth}px`;
        popOverRef.style.height = `${scriptureRef.offsetheight}px`;
      }} style={{position: 'relative'}}>
        <div ref={(ref) => popOverRef = ref} aria-label={popoverLabel} className="hint--top hint--medium" style={{
          position: 'fixed'
        }} />
        <span ref={(ref) => scriptureRef = ref}>{wholeMatch}</span>
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
