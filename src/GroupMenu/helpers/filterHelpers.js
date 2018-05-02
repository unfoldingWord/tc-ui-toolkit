export function getFilterCount(filters) {
  return Object.keys(filters).filter(k => filters[k]).length;
}