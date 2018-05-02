export const getFilterCount = (filters) => {
  return Object.keys(filters).filter(k => filters[k]).length;
};

/**
 * @description - Determines if the item should be navigatable
 * @param {object} groupItemData 
 * @returns {boolean}
 */
export const groupItemIsVisible = (groupItemData, filters) => {
  return (!getFilterCount(filters) ||
    ((filters.invalidated && groupItemData.invalidated)
      || (filters.reminders && groupItemData.reminders)
      || (filters.selections && groupItemData.selections)
      || (filters.noSelections && !groupItemData.selections)
      || (filters.verseEdits && groupItemData.verseEdits)
      || (filters.comments && groupItemData.comments)
    ));
};

/**
 * @description - Determines if the group is navigatable based on filters
 * @param {object} groupData
 * @returns {boolean}
 */
export const groupIsVisible = (groupData, filters) => {
  if (!getFilterCount(filters)) {
    return true;
  }
  for (let groupItemData of groupData) {
    if (groupItemIsVisible(groupItemData, filters)) {
      return true;
    }
  }
  return false;
};