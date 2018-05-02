import React from 'react';
import FilterBadge from './FilterBadge';

const FilterMenuHeader = ({currentToolName, expandFilter, handleFilterShowHideToggle, filterCount}) => {
  return currentToolName === "translationWords" && (
    <div className="filter-toggle">
      <Glyphicon
        key="filter"
        glyph="filter"
        className={'filter-icon ' + (expandFilter ? 'expanded' : 'collapsed')}
        onClick={this.handleFilterShowHideToggle} />
      <FilterBadge
        handleFilterShowHideToggle={handleFilterShowHideToggle}
        filterCount={filterCount}
        expandFilter={expandFilter} />
    </div>
  );
}

export default FilterMenuHeader;