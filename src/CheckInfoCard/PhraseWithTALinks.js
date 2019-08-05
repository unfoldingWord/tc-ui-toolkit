import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhraseWithTALinks extends Component {
  constructor(props) {
    super(props);
  }

  onTALinkClick = (link) => {
    window.followLink = link;
  };

  render() {
    const {phrase} = this.props;
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
          <a onClick={()=>this.onTALinkClick(current)}>
            {current}
          </a>
        );
      }, []);
    console.log(textAndLinks);
    return (<div>
      {textAndLinks}
    </div>);
  }
}

PhraseWithTALinks.propTypes = {
  phrase: PropTypes.string.isRequired,
};

export default PhraseWithTALinks;
