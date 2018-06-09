import React from 'react';
import PropTypes from 'prop-types';

import './NoResults.styles.css';

const NoResults = ({translate}) => (<div className='no-results'>{translate('menu.no_results')}</div>);

NoResults.propTypes = {
  translate: PropTypes.func.isRequired
};

export default NoResults;
