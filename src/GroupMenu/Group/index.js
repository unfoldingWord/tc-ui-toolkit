import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import {CircularProgress} from 'material-ui/Progress';
import {Glyphicon} from 'react-bootstrap';
import GroupItems from '../GroupItems';

const Group = ({
  changeCurrentContextId,
  active,
  groupMenuExpandSubMenu,
  openGroup,
  isSubMenuExpanded,
  progress,
  groupIndex,
  groupData,
  filters,
  manifest,
  selections,
  contextId
}) => {
  let groupMenuItemHeadingClassName = active ? 'menu-item-heading-current' : 'menu-item-heading-normal';

  let glyphAction = active ? groupMenuExpandSubMenu : openGroup;
  let expandedGlyph = (
    <Glyphicon glyph="chevron-down" style={{float: 'right', marginTop: '3px'}} onClick={() => glyphAction(false)} />
  );
  let collapsedGlyph = (
    <Glyphicon glyph="chevron-right" style={{float: 'right', marginTop: '3px'}} onClick={() => glyphAction(true)} />
  );

  return (
    <MuiThemeProvider>
      <div className="group">
        <div className={groupMenuItemHeadingClassName}>
          {active && isSubMenuExpanded ? expandedGlyph : collapsedGlyph}
          <div onClick={openGroup}>
            <div style={{marginRight: '10px', float: 'left', border: 'white solid 3px', borderRadius: '50%', width: '20px', height: '20px'}}>
              <CircularProgress
                variant="determinate"
                value={progress * 100}
                thickness={3}
                size={20}
                color={progress ? "var(--accent-color-light)" : 'white'}
                style={{right: 3, bottom: 3}}
              />
            </div>
            {groupIndex.name}
          </div>
        </div>
        {active && isSubMenuExpanded ?
          (<GroupItems
            changeCurrentContextId={changeCurrentContextId}
            contextId={contextId}
            groupData={groupData}
            groupHeaderComponent={this}
            filters={filters}
            manifest={manifest}
            selections={selections} />)
          : null}
      </div>
    </MuiThemeProvider>
  );
};

Group.propTypes = {
  manifest: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  contextId: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  groupData: PropTypes.object.isRequired,
  isSubMenuExpanded: PropTypes.bool.isRequired,
  groupMenuExpandSubMenu: PropTypes.func.isRequired,
  groupMenuReducer: PropTypes.any.isRequired,
  openGroup: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  groupIndex: PropTypes.object.isRequired,
  getGroupItems: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Group;