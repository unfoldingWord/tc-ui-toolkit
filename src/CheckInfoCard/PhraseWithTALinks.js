import React, { Component } from 'react';
import PropTypes from 'prop-types';

function PhraseWithTALinks({phrase}) {
  if (!phrase)
    return phrase;
  const regex = /\[\[rc:\/\/([^/]+\/ta\/man\/[^\]]+)]]/;
  const splitPhrase = phrase.split(regex);
  if (splitPhrase.length < 2)
    return phrase;
  console.log("split", splitPhrase);
  const textAndLinks = splitPhrase
    .reduce((prev, current, i) => {
      if (!i)
        return [current];
      if (!(i % 2)) {
        return prev.concat(current);
      }
      return prev.concat(
        <a onClick={() => onTALinkClick(current)}>
          {current}
        </a>
      );
    }, []);
  console.log(textAndLinks);
  return (<div>
    {textAndLinks}
  </div>);
}

function onTALinkClick(link) {
  if (window.followLink)
    window.followLink(link);
}

export default PhraseWithTALinks;
