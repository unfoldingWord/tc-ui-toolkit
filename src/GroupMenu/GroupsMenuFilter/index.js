import React from 'react';
import PropTypes from 'prop-types';
import ExpandedFilter from './ExpandedFilter';
import CollapsedFilter from './CollapsedFilter';

const GroupsMenuFilter = ({
  currentToolName,
  filters,
  translate,
  expandFilter,
  setFilter,
  filterCount
}) => {
  if (currentToolName === "translationWords" && (expandFilter || filterCount)) {
    if (expandFilter) {
      return (
        <ExpandedFilter
          filters={filters}
          setFilter={setFilter}
          translate={translate} />);
    } else {
      return (
        <CollapsedFilter
          filters={filters}
          setFilter={setFilter}
          translate={translate}
        />);
    }
  } else return null;
};

GroupsMenuFilter.defaultProps = {
  expandFilter: false
};

GroupsMenuFilter.propTypes = {
  translate: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  setFilter: PropTypes.func,
  expandFilter: PropTypes.bool
};

export default GroupsMenuFilter;
