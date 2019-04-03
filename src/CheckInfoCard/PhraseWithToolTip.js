import React from 'react';
import {getOffset} from './helpers';

function PhraseWithToolTip({phrase, getScriptureFromReference}) {
  let scriptureRef;
  let tooltipRef;
  const rcMatch = phrase.match(/\[(\w+.+:\d+)]\(rc:\/\/(\w+)\/(\w+)\/book\/(\w+)\/(\d+)\/(\d+)\)/) || [];
  const showTooltip = rcMatch.length > 0;
  if (showTooltip) {
    const [wholeMatch, referenceText, lang, id, book, chapter, verse] = rcMatch;
    const [preReference, postReference] = phrase.split(wholeMatch);
    const tooltipLabel = getScriptureFromReference(lang, id, book, chapter, verse);
    return (<div>
      {preReference}
      <span onMouseEnter={() => {
        const {top, left} = getOffset(scriptureRef);
        tooltipRef.style.top = `${top}px`;
        tooltipRef.style.left = `${left}px`;
        tooltipRef.style.width = `${scriptureRef.offsetWidth}px`;
        tooltipRef.style.height = `${scriptureRef.offsetHeight}px`;
      }} style={{position: 'relative'}}>
        <div ref={(ref) => tooltipRef = ref} aria-label={tooltipLabel} className="hint--top hint--medium" style={{
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
  } else {
    return phrase;
  }
}

export default PhraseWithToolTip;
