import React from 'react';

const FilterBadge = ({expandFilter, filterCount, handleFilterShowHideToggle}) => {
  return !expandFilter && filterCount ?
    <span className="filter-badge badge" onClick={handleFilterShowHideToggle}>{filterCount}</span> :
    null;
};

export default FilterBadge;