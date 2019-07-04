import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import './SpinningLogo.styles.css';

const SpinningLogo = ({
  height,
  style,
}) => {
  const styles = {
    margin: '25px 20px 0px 55px',
    ...style
  };

  return (
    <div className="container">
      <Logo
        className="App-logo-component"
        height={height}
        style={styles}
      />
    </div>
  );
};

SpinningLogo.propTypes = {
  height: PropTypes.string.isRequired,
  style: PropTypes.object,
};

SpinningLogo.defaultProps = {
  height: "300px",
  style: {}
};

export default SpinningLogo;
