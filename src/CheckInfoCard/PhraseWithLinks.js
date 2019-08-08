import React from 'react';
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

const LinkableThelpsResources = ['ta', 'tw'];

const PhraseWithLinks = ({phrase, getScriptureFromReference, onTHelpsLinkClick}) => {
  // The split regular expression. NOTE: the outside parans are what keep the match in the splitPhrase array
  // This matches a Markdown link in the form of (Title)[rc://lang/resource/type/ending]
  const splitRE = /(\[[^)]+]\s*\(rc:\/\/[\w-]+\/[\w-]+\/[\w-]+\/[^\s)\]]+\))/;
  // splitPhrase will be an array of alternating [text, link, text, link, etc.], thus even index are text, odd are links
  const splitPhrase = phrase.split(splitRE);
  if (splitPhrase.length < 2)
    return phrase;
  // Now go through those text elements and link elements and put them into a an array of components
  const textAndLinks = splitPhrase.reduce((prev, current, i) => {
    // the first element starts the new list and is text.
    const key = 'phrase-' + i;
    if (i === 0)
      return [(<span key={key}>{current}</span>)];
    // All even elements are text, so leave as is.
    if (!(i % 2))
      return prev.concat(<span key={key}>{current}</span>);
    // Now we have an odd indexed element, which is a link. If its a Bible reference, we make it a tooltip.
    // if it is a tHelps link, we make it clickable to open in the tHelps sidebar.
    // Any other link we will have it be a tooltip as the rc link.
    // Again, this is matching (Title)[rc://lang/resource/type/ending] but getting each part
    const linkRE = /\[([^)]+)]\s*\((rc:\/\/([\w-]+)\/([\w-]+)\/([\w-]+)\/([^)]+))\)/;
    let match = current.match(linkRE);
    if (!match)
      // Shouldn't ever be here, but just in case
      return prev.concat(<span key={key}>{current}</span>);
    match.shift();
    const [title, wholeLink, lang, resource, type, ending] = match;
    if (type === 'book') {
      // It's a Bible reference
      const bibleRefRE = /(\w+)\/(\d+)\/(\d+)/;
      const match = ending.match(bibleRefRE);
      if (match) {
        // It properly parsed from <book>/<chapter>/<verse>
        match.shift();
        const [book, chapter, verse] = match;
        const tooltip = getScriptureFromReference(lang, resource, book, chapter, verse);
        return prev.concat(<span
          key={key}
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
      // It's a tHelps link, so we call the function to show the article in the tHelps modal
      const link = [lang, resource, ending].join('/');
      return prev.concat(
        <span
          key={key}
          className={'thelps-link-title'}
          style={{whiteSpace: 'nowrap', textDecoration: 'underline'}}
          onClick={() => onTHelpsLinkClick(link)}
        >
          {title}
        </span>
      );
    }
    // Leaves the link as tooltip to the title
    return prev.concat(<span
      key={key}
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
