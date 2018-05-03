import React from 'react';
import PropTypes from 'prop-types';
//helpers
import * as helpers from './helpers/';
//components
import Groups from './Groups';
import FilterMenuHeader from './FilterMenuHeader';
import GroupsMenuFilter from './GroupsMenuFilter';

class GroupMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandFilter: false
    };
    this.handleFilterShowHideToggle = this.handleFilterShowHideToggle.bind(this);
  }

  handleFilterShowHideToggle() {
    this.setState({expandFilter: !this.state.expandFilter});
  }

  render() {
    const {
      translate,
      toolsReducer: {currentToolName},
      groupMenuReducer: {filters, isSubMenuExpanded},
      groupsIndexReducer: {groupsIndex},
      groupsDataReducer: {groupsData},
      contextIdReducer: {contextId},
      projectDetailsReducer: {projectSaveLocation},
      actions
    } = this.props;
    const filterCount = helpers.getFilterCount(filters);
    const showFilterMenu = currentToolName === "translationWords" && (this.state.expandFilter || filterCount);
    return (
      <div id="group-menu-container">
        <div id="groups-menu-top">
          <div id="groups-menu-header">
            <span id="groups-menu-title">
              {translate('tools.menu')}
            </span>
            <FilterMenuHeader
              filterCount={filterCount}
              handleFilterShowHideToggle={this.handleFilterShowHideToggle}
              currentToolName={currentToolName}
              expandFilter={this.state.expandFilter} />
          </div>
          <GroupsMenuFilter
            show={showFilterMenu}
            expandFilter={this.state.expandFilter}
            filters={filters}
            translate={translate}
            setFilter={actions.setFilter} />
        </div>
      </div>
    );
  }
}

GroupMenu.propTypes = {
  translate: PropTypes.func.isRequired,
  toolsReducer: PropTypes.shape({
    currentToolName: PropTypes.string.isRequired
  }),
  groupMenuReducer: PropTypes.shape({
    filters: PropTypes.object.isRequired,
    isSubMenuExpanded: PropTypes.bool.isRequired
  }),
  groupsIndexReducer: PropTypes.shape({
    groupsIndex: PropTypes.object.isRequired
  }),
  groupsDataReducer: PropTypes.shape({
    groupsData: PropTypes.object.isRequired
  }),
  contextIdReducer: PropTypes.shape({
    contextId: PropTypes.object.isRequired
  }),
  projectDetailsReducer: PropTypes.shape({
    projectSaveLocation: PropTypes.string.isRequired
  }),
  actions: PropTypes.shape({
    setFilter: () => {},
    groupMenuChangeGroup: () => {}
  })
};

GroupMenu.defaultProps = {
  translate: key => key,
  toolsReducer: {currentToolName: ''},
  groupMenuReducer: {filters: {}, isSubMenuExpanded: false},
  groupsIndexReducer: {groupsIndex: {}},
  groupsDataReducer: {groupsData: {}},
  contextIdReducer: {
    contextId: {

    }
  },
  projectDetailsReducer: {projectSaveLocation: ''},
  actions: {
    setFilter: () => {},
    groupMenuChangeGroup: () => {}
  }
};


export default GroupMenu;

// <Groups
// isSubMenuExpanded={isSubMenuExpanded}
// groupsIndex={groupsIndex}
// groupsData={groupsData}
// contextId={contextId}
// projectSaveLocation={projectSaveLocation}
// groupMenuChangeGroup={actions.groupMenuChangeGroup}
// filters={filters} />