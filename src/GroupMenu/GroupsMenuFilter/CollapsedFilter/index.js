import React from 'react';
import PropTypes from 'prop-types';
import GroupsMenuFilterBubble from '../GroupsMenuFilterBubble';

const CollapsedFilter = ({
  translate,
  filters,
  setFilter
}) => {
  const bubbles = [];

  if (filters.invalidated) {
    bubbles.push(<GroupsMenuFilterBubble
      onPress={(name) => setFilter(name, false)}
      key='invalidated'
      name='invalidated'
      text={translate('tools.invalidated')} />);
  }

  if (filters.reminders) {
    bubbles.push(<GroupsMenuFilterBubble
      onPress={(name) => setFilter(name, false)}
      key='reminders'
      name='reminders'
      text={translate('tools.bookmarks')} />);
  }

  if (filters.selections) {
    bubbles.push(<GroupsMenuFilterBubble
      onPress={(name) => setFilter(name, false)}
      key='selections'
      name='selections'
      text={translate('tools.selected')} />);
  }

  if (filters.noSelections) {
    bubbles.push(<GroupsMenuFilterBubble
      onPress={(name) => setFilter(name, false)}
      key='noSelections'
      name='noSelections'
      text={translate('tools.no_selection')} />);
  }

  if (filters.verseEdits) {
    bubbles.push(<GroupsMenuFilterBubble
      onPress={(name) => setFilter(name, false)}
      key='verseEdits'
      name='verseEdits'
      text={translate('tools.verse_edit')} />);
  }

  if (filters.comments) {
    bubbles.push(<GroupsMenuFilterBubble
      onPress={(name) => setFilter(name, false)}
      key='comments'
      name='comments'
      text={translate('tools.comments')}
      setFilter={setFilter} />);
  }

  return (
    <div id="groups-menu-filter" className="bubbles-wrapper">
      {bubbles}
    </div>
  );
};

CollapsedFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
};

export default CollapsedFilter;