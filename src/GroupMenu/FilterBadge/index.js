import React from 'react';
import PropTypes from 'prop-types';

const FilterBadge = ({expandFilter, filterCount, handleFilterShowHideToggle}) => {
  return !expandFilter && filterCount ?
    <span className="filter-badge badge" onClick={handleFilterShowHideToggle}>{filterCount}</span> :
    null;
};

FilterBadge.propTypes = {
  expandFilter: PropTypes.bool.isRequired,
  filterCount: PropTypes.number.isRequired,
  handleFilterShowHideToggle: PropTypes.func.isRequired
};

export default FilterBadge;