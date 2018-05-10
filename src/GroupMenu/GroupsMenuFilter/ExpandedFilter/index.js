import React from 'react';
import PropTypes from 'prop-types';
import GroupsMenuFilterOption from '../GroupsMenuFilterOption';
import InvalidatedIcon from '../InvalidatedIcon';
import {Glyphicon} from 'react-bootstrap';

const ExpandedFilter = ({
  filters,
  setFilter,
  translate
}) => {
  const options = [];

  options.push(<GroupsMenuFilterOption
    onCheck={(name, value) => setFilter(name, value)}
    key="invalidated"
    name="invalidated"
    checked={filters.invalidated}
    setFilter={setFilter}
    icon={<InvalidatedIcon width={16} height={16} color="#fff" />}
    text={translate('menu.invalidated')} />);

  options.push(<GroupsMenuFilterOption
    onCheck={(name, value) => setFilter(name, value)}
    key="reminders"
    name="reminders"
    checked={filters.reminders}
    setFilter={setFilter}
    icon={<Glyphicon glyph="bookmark" />}
    text={translate('menu.bookmarks')} />);

  options.push(<GroupsMenuFilterOption
    onCheck={(name, value) => setFilter(name, value)}
    key="selections"
    name="selections"
    checked={filters.selections}
    disabled={filters.noSelections}
    setFilter={setFilter}
    icon={<Glyphicon glyph="ok" />}
    text={translate('menu.selected')} />);

  options.push(<GroupsMenuFilterOption
    onCheck={(name, value) => setFilter(name, value)}
    key="noSelections"
    name="noSelections"
    checked={filters.noSelections}
    disabled={filters.selections}
    setFilter={setFilter}
    icon={<Glyphicon glyph="ban-circle" />}
    text={translate('menu.no_selection')} />);

  options.push(<GroupsMenuFilterOption
    onCheck={(name, value) => setFilter(name, value)}
    key="verseEdits"
    name="verseEdits"
    checked={filters.verseEdits}
    setFilter={setFilter}
    icon={<Glyphicon glyph="pencil" />}
    text={translate('menu.verse_edit')} />);

  options.push(<GroupsMenuFilterOption
    onCheck={(name, value) => setFilter(name, value)}
    key="comments"
    name="comments"
    checked={filters.comments}
    setFilter={setFilter}
    icon={<Glyphicon glyph="comment" />}
    text={translate('menu.comments')} />);

  return (
    <div id="groups-menu-filter" className="options-wrapper">
      {options}
    </div>
  );
};

ExpandedFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
};

export default ExpandedFilter;