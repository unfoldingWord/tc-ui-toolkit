const FilterBadge = ({expandFilter, filterCount, handleFilterShowHideToggle}) => {
  return (!expandFilter && filterCount) &&
    <span className="filter-badge badge" onClick={handleFilterShowHideToggle}>{filterCount}</span>
}

export default FilterBadge;