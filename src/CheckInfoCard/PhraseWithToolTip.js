/* eslint-disable no-return-assign */
import React, {useEffect, useRef} from 'react';
import { getOffset } from './helpers';
import marked from 'marked';

function PhraseWithToolTip({ phrase, getScriptureFromReference }) {
  const phraseEl = useRef(null);
  useEffect(() => {
    const anchors = phraseEl.current.getElementsByTagName(`a`);
    console.log(anchors);
    for (const a of anchors) {
      a.onclick = (event) => {
        event.preventDefault();
        console.log(`Intercepted link ${a.href}`);
      }
    }
  }, [phrase, phraseEl]);

  let scriptureRef;
  let tooltipRef;
  const rcMatch = phrase.match(/\[([^\]]+)\]\s*\(rc:\/\/([\w-]+)\/([\w-]+)\/book\/(\w+)\/(\d+)\/(\d+)\)/) || [];
  const showTooltip = rcMatch.length > 0;

  if (showTooltip) {
    const [wholeMatch, referenceText, lang, id, book, chapter, verse] = rcMatch;
    const [preReference, postReference] = phrase.split(wholeMatch);
    const tooltipLabel = getScriptureFromReference(lang, id, book, chapter, verse);
    return (<div >
      <span dangerouslySetInnerHTML={{ __html: preReference }} />
      <span onMouseEnter={() => {
        const { top, left } = getOffset(scriptureRef);
        tooltipRef.style.top = `${top}px`;
        tooltipRef.style.left = `${left}px`;
        tooltipRef.style.width = `${scriptureRef.offsetWidth}px`;
        tooltipRef.style.height = `${scriptureRef.offsetHeight}px`;
      }} style={{ position: 'relative' }}>
        <div ref={(ref) => tooltipRef = ref} aria-label={tooltipLabel} className="hint--top hint--medium" style={{ position: 'fixed' }} />
        <span style={{
          whiteSpace: 'nowrap',
          textDecoration: 'underline',
        }} ref={(ref) => scriptureRef = ref}>{referenceText}</span>
      </span>
      {/*  TODO: this needs to be marked() as well */}
      {postReference}
    </div>
    );
  } else {
    return (
      <div ref={phraseEl} dangerouslySetInnerHTML={{ __html: marked(phrase) }} />
    );
  }
}

export default PhraseWithToolTip;
