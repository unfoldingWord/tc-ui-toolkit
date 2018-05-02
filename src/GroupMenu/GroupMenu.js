import React from 'react';
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
        <Groups
          isSubMenuExpanded={isSubMenuExpanded}
          groupsIndex={groupsIndex}
          groupsData={groupsData}
          contextId={contextId}
          projectSaveLocation={projectSaveLocation}
          groupMenuChangeGroup={actions.groupMenuChangeGroup}
          filters={filters} />
      </div>
    );
  }
}

GroupMenu.propTypes = {

}

GroupMenu.defaultProps = {

}


export default GroupMenu;