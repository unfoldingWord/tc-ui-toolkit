import React from 'react';
import PropTypes from 'prop-types';
import ExpandedFilter from './ExpandedFilter';
import CollapsedFilter from './CollapsedFilter';

const GroupsMenuFilter = ({
  filters,
  translate,
  expandFilter,
  setFilter
}) => {

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
