import React from 'react';
import PropTypes from 'prop-types';

import './CheckInfoCard.styles.css';
import PhraseWithLinks from './PhraseWithLinks';


const CheckInfoCard = ({
  title,
  phrase,
  seeMoreLabel,
  onSeeMoreClick,
  showSeeMoreButton,
  getScriptureFromReference,
  onTHelpsLinkClick,
}) => {
  return (
    <div className="checkInfo">
      <div className="leftSide">
        <div className="title">
          {title}
        </div>
      </div>
      <div className="rightSide">
        <div className="phrase">
          <PhraseWithLinks phrase={phrase} getScriptureFromReference={getScriptureFromReference} onTHelpsLinkClick={onTHelpsLinkClick} />
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
  getScriptureFromReference: PropTypes.func,
  onTHelpsLinkClick: PropTypes.func,
};

export default CheckInfoCard;
