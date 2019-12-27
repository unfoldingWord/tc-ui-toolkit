import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
//helpers
import * as helpers from './helpers/';
//components
import Groups from './Groups';
import FilterMenuHeader from './FilterMenuHeader';
import GroupsMenuFilter from './GroupsMenuFilter';

import './GroupMenu.styles.css';

class GroupMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandFilter: false,
      isSubMenuExpanded: false,
    };
    this.handleFilterShowHideToggle = this.handleFilterShowHideToggle.bind(this);
  }

  handleFilterShowHideToggle() {
    this.setState({ expandFilter: !this.state.expandFilter });
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {
    const {
      translate,
      toolsReducer: { currentToolName },
      groupMenuReducer: { filters, isSubMenuExpanded },
      groupsIndexReducer: { groupsIndex },
      groupsDataReducer: { groupsData },
      contextIdReducer: { contextId },
      projectDetailsReducer: { projectSaveLocation, manifest },
      actions,
      getSelections,
      isVerseFinished,
      isVerseValid,
      getGroupProgress,
    } = this.props;
    const filterCount = helpers.getFilterCount(filters);
    // const showFilterMenu = currentToolName === "translationWords" && (this.state.expandFilter || filterCount);

    return (
      <div id="groups-menu-container">
        <div id="groups-menu-top">
          <div id="groups-menu-header">
            <span id="groups-menu-title">
              {translate('menu.menu')}
            </span>
            <FilterMenuHeader
              filterCount={filterCount}
              handleFilterShowHideToggle={this.handleFilterShowHideToggle}
              currentToolName={currentToolName}
              expandFilter={this.state.expandFilter} />
          </div>
          <GroupsMenuFilter
            filterCount={filterCount}
            currentToolName={currentToolName}
            expandFilter={this.state.expandFilter}
            filters={filters}
            translate={translate}
            setFilter={actions.setFilter} />
        </div>
        <ReactTooltip id="groups-tooltip"/>
        <Groups
          currentToolName={currentToolName}
          isVerseFinished={isVerseFinished}
          isVerseValid={isVerseValid}
          getSelections={getSelections}
          translate={translate}
          changeCurrentContextId={actions.changeCurrentContextId}
          getGroupProgress={getGroupProgress}
          isSubMenuExpanded={isSubMenuExpanded}
          groupsIndex={groupsIndex}
          groupsData={groupsData}
          contextId={contextId}
          manifest={manifest}
          projectSaveLocation={projectSaveLocation}
          groupMenuExpandSubMenu={actions.groupMenuExpandSubMenu}
          groupMenuChangeGroup={actions.groupMenuChangeGroup}
          filters={filters} />
      </div>
    );
  }
}

GroupMenu.propTypes = {
  isVerseValid: PropTypes.func.isRequired,
  isVerseFinished: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  toolsReducer: PropTypes.shape({ currentToolName: PropTypes.string.isRequired }),
  groupMenuReducer: PropTypes.shape({
    filters: PropTypes.object.isRequired,
    isSubMenuExpanded: PropTypes.bool.isRequired,
  }),
  groupsIndexReducer: PropTypes.shape({ groupsIndex: PropTypes.array.isRequired }),
  groupsDataReducer: PropTypes.shape({ groupsData: PropTypes.object.isRequired }),
  contextIdReducer: PropTypes.shape({ contextId: PropTypes.object.isRequired }),
  projectDetailsReducer: PropTypes.shape({
    projectSaveLocation: PropTypes.string.isRequired,
    manifest: PropTypes.object.isRequired,
  }),
  actions: PropTypes.shape({
    setFilter: PropTypes.func.isRequired,
    groupMenuChangeGroup: PropTypes.func.isRequired,
    groupMenuExpandSubMenu: PropTypes.func.isRequired,
    changeCurrentContextId: PropTypes.func.isRequired,
  }),
  getGroupProgress: PropTypes.func.isRequired,
  getSelections: PropTypes.func.isRequired,
};

export default GroupMenu;
