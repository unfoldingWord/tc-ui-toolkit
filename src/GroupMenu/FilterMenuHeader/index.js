import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import FilterBadge from '../FilterBadge';

const FilterMenuHeader = ({
  filterCount,
  expandFilter,
  currentToolName,
  handleFilterShowHideToggle,
}) => currentToolName === 'translationWords' && (
  <div className="filter-toggle">
    <Glyphicon
      key="filter"
      glyph="filter"
      className={'filter-icon ' + (expandFilter ? 'expanded' : 'collapsed')}
      onClick={handleFilterShowHideToggle} />
    <FilterBadge
      handleFilterShowHideToggle={handleFilterShowHideToggle}
      filterCount={filterCount}
      expandFilter={expandFilter} />
  </div>
);

FilterMenuHeader.propTypes = {
  expandFilter: PropTypes.bool.isRequired,
  filterCount: PropTypes.number.isRequired,
  currentToolName: PropTypes.string.isRequired,
  handleFilterShowHideToggle: PropTypes.func.isRequired,
};

export default FilterMenuHeader;
