import React from 'react';

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
        <a onClick={() => window.followLink(current)}>
          {current}
        </a>
      );
    }, []);
  console.log(textAndLinks);
  return (<div>
    {textAndLinks}
  </div>);
}

export default PhraseWithTALinks;
