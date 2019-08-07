import React from 'react';
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

const LinkableThelpsResources = ['ta', 'tn', 'tw'];

const PhraseWithLinks = ({phrase, getScriptureFromReference, onTHelpsLinkClick}) => {
  // The split regular expression. NOTE: the outside parans are what keep the match in the splitPhrase array
  const splitRE = /(\[[^)]+]\s*\(rc:\/\/[\w-]+\/[\w-]+\/[\w-]+\/[^\]]+\))/;
  // splitPhrase will be an array of alternating [text, link, text, link, etc.], thus even index are text, odd are links
  const splitPhrase = phrase.split(splitRE);
  if (splitPhrase.length < 2)
    return phrase;
  // Now go through those text elements and link elements and put them into a an array of components
  const textAndLinks = splitPhrase.reduce((prev, current, i) => {
    // the first element starts the new list and is text.
    if (i === 0)
      return [current];
    // even elements are text so leave as is.
    if (!(i % 2))
      return prev.concat(current);
    // Now we have an odd indexed element, which is a link. If its a Bible reference, we make it a tool tip.
    // if it is a tHelps link, we make it clickable to open in the tHelps sidebar.
    // Any other link we will have it be a tool tip as the rc link.
    const linkRE = /\[([^)]+)]\s*\((rc:\/\/([\w-]+)\/([\w-]+)\/([\w-]+)\/([^)]+))\)/;
    let match = current.match(linkRE);
    if (!match)
      return prev.concat(current);
    match.shift();
    const [title, wholeLink, lang, resource, type, ending] = match;
    if (type === 'book') {
      const bibleRefRE = /(\w+)\/(\d+)\/(\d+)/;
      const match = ending.match(bibleRefRE);
      if (match) {
        match.shift();
        const [book, chapter, verse] = match;
        const tooltip = getScriptureFromReference(lang, resource, book, chapter, verse);
        return prev.concat(<span
          className="scripture"
          data-for="phrase-tooltip"
          data-tip={tooltip}
          data-place="bottom"
          data-effect="float"
          data-type="light"
          style={{minWidth: 0}}
          data-class="phrase-scripture-tooltip"
          data-delay-hide="100">
            <span className={'phrase-scripture-title'} style={{whiteSpace: 'nowrap', textDecoration: 'underline'}}>
              {title}
            </span>
        </span>);
      }
    }
    if (LinkableThelpsResources.indexOf(resource) >= 0) {
      const link = [lang, resource, ending].join('/');
      return prev.concat(
        <span className={'thelps-link-title'} style={{whiteSpace: 'nowrap', textDecoration: 'underline'}}
              onClick={() => onTHelpsLinkClick(link)}>
            {title}
          </span>
      );
    }
    // Leaves the link as tooltip with the text
    return prev.concat(<span
      className="scripture"
      data-for="phrase-tooltip"
      data-tip={wholeLink}
      data-place="bottom"
      data-effect="float"
      data-type="light"
      style={{minWidth: 0}}
      data-class="phrase-link-tooltip"
      data-delay-hide="100">
            <span className={'phrase-link-title'} style={{whiteSpace: 'nowrap', textDecoration: 'underline'}}>
              {title}
            </span>
      </span>);
  }, []);
  return (<div>
    {textAndLinks}
    <ReactTooltip id="phrase-tooltip"/>
  </div>);
};

PhraseWithLinks.propTypes = {
  phrase: PropTypes.string.isRequired,
  getScriptureFromReference: PropTypes.func.isRequired,
  onTHelpsLinkClick: PropTypes.func.isRequired,
};

export default PhraseWithLinks;
