import React from 'react';
import PropTypes from 'prop-types';

import './CheckInfoCard.styles.css';

const CheckInfoCard = ({
  title,
  phrase,
  seeMoreLabel,
  onSeeMoreClick,
  showSeeMoreButton,
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
          {phrase}
        </div>
        <div onClick={showSeeMoreButton ? onSeeMoreClick : null} className={showSeeMoreButton ? 'linkActive' : 'linkInactive' }>
          {seeMoreLabel}
        </div>
      </div>
    </div>
  )
}

CheckInfoCard.propTypes = {
  phrase: PropTypes.string,
  title: PropTypes.string,
  onSeeMoreClick: PropTypes.func,
  showSeeMoreButton: PropTypes.bool,
}

export default CheckInfoCard
