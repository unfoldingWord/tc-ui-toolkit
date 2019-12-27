import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  height,
  width,
  style,
  className,
}) => (
  <div className={className || ''} style={{
    ...style, height, width,
  }}>
    <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 475 530" enableBackground="new 0 0 475 530" xmlSpace="preserve">
      <image id="image0" width="100%" height="100%" x="0" y="0" xlinkHref="data:image/png;base64,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
          gg==" />
    </svg>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Logo;
