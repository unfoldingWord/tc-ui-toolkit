import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
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
      isSubMenuExpanded: false
    };
    this.handleFilterShowHideToggle = this.handleFilterShowHideToggle.bind(this);
  }

  handleFilterShowHideToggle() {
    this.setState({expandFilter: !this.state.expandFilter});
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {
    const {
      translate,
      toolsReducer: {currentToolName},
      groupMenuReducer: {filters, isSubMenuExpanded},
      groupsIndexReducer: {groupsIndex},
      groupsDataReducer: {groupsData},
      contextIdReducer: {contextId},
      projectDetailsReducer: {projectSaveLocation, manifest},
      actions,
      getSelections,
      isVerseFinished,
      isVerseValid,
      getGroupProgress
    } = this.props;
    const filterCount = helpers.getFilterCount(filters);
    // const showFilterMenu = currentToolName === "translationWords" && (this.state.expandFilter || filterCount);
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    );
  }
}

GroupMenu.propTypes = {
  isVerseValid: PropTypes.func.isRequired,
  isVerseFinished: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  toolsReducer: PropTypes.shape({
    currentToolName: PropTypes.string.isRequired
  }),
  groupMenuReducer: PropTypes.shape({
    filters: PropTypes.object.isRequired,
    isSubMenuExpanded: PropTypes.bool.isRequired
  }),
  groupsIndexReducer: PropTypes.shape({
    groupsIndex: PropTypes.array.isRequired
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
    setFilter: PropTypes.func.isRequired,
    groupMenuChangeGroup: PropTypes.func.isRequired,
    groupMenuExpandSubMenu: PropTypes.func.isRequired
  }),
  getGroupProgress: PropTypes.func.isRequired,
  getSelections: PropTypes.func.isRequired,
};
var i = 1;

GroupMenu.defaultProps = {
  getGroupProgress: () => 1,
  isVerseFinished: () => false,
  isVerseValid: () => true,
  getSelections: () => 'A selection',
  translate: key => key,
  toolsReducer: {currentToolName: 'translationWords'},
  groupMenuReducer: {filters: {}, isSubMenuExpanded: true},
  groupsIndexReducer: {
    groupsIndex: [{
      id: 'apostle',
      name: "apostle, apostles, apostleship"
    }]
  },
  groupsDataReducer: {
    groupsData: {
      apostle: [{
          "priority": 1,
          "comments": false,
          "reminders": false,
          "selections": false,
          "verseEdits": false,
          "contextId": {
            "reference": {
              "bookId": "tit",
              "chapter": 1,
              "verse": 1
            },
            "tool": "translationWords",
            "groupId": "apostle",
            "quote": "ἀπόστολος",
            "strong": [
              "G06520"
            ],
            "occurrence": 1
          }
        },
        ...Array(50).fill(0).map(()=>({
          "priority": 1,
          "comments": false,
          "reminders": false,
          "selections": false,
          "verseEdits": false,
          "contextId": {
            "reference": {
              "bookId": "tit",
              "chapter": 2,
              "verse": i++
            },
            "tool": "translationWords",
            "groupId": "apostle",
            "quote": "ἀπόστολος",
            "strong": [
              "G06520"
            ],
            "occurrence": 1
          }
        }))]

    }
  },
  contextIdReducer: {
    contextId: {
      "reference": {
        "bookId": "tit",
        "chapter": 2,
        "verse": 14
      },
      "tool": "translationWords",
      "groupId": "apostle",
      "quote": "ἀπόστολος",
      "strong": [
        "G06520"
      ],
      "occurrence": 1
    }
  },
  projectDetailsReducer: {
    projectSaveLocation: '',
    manifest: {
      "target_language": {
        "id": "bhadrawahi",
        "name": "Bible",
        "direction": "ltr",
        "book": {
          "name": "Titus"
        }
      },
      "project": {
        "id": "tit",
        "name": "Titus"
      }
    }
  },
  actions: {
    setFilter: () => {},
    groupMenuChangeGroup: () => {},
    groupMenuExpandSubMenu: () => {}
  }
};


export default GroupMenu;
