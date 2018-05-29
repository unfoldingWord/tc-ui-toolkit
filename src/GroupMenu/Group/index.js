import React from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import PropTypes from 'prop-types';
import {CircularProgress} from 'material-ui/Progress';
import {Glyphicon} from 'react-bootstrap';
import GroupItems from '../GroupItems';
import {withStyles} from 'material-ui/styles';

const styles = {
  circle: {
    width: 40,
    height: 40
  }
};

class Group extends React.Component {
  render() {
    const {
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
      contextId,
      getSelections,
      classes,
      isVerseFinished,
      currentToolName
    } = this.props;
    let groupMenuItemHeadingClassName = active ? 'menu-item-heading-current' : 'menu-item-heading-normal';

    let glyphAction = active ? groupMenuExpandSubMenu : openGroup;
    let expandedGlyph = (
      <Glyphicon glyph="chevron-down" style={{float: 'right', marginTop: '3px'}} onClick={() => glyphAction(false)} />
    );
    let collapsedGlyph = (
      <Glyphicon glyph="chevron-right" style={{float: 'right', marginTop: '3px'}} onClick={() => glyphAction(true)} />
    );
    const theme = createMuiTheme();
    return (
      <MuiThemeProvider theme={theme}>
        <div className="group">
          <div className={groupMenuItemHeadingClassName}>
            {active && isSubMenuExpanded ? expandedGlyph : collapsedGlyph}
            <div onClick={openGroup}>
              <div style={{position: 'relative', justifyContent: 'center', height: 20, width: 20, display: 'flex', marginRight: '10px', float: 'left'}}>
                <div style={{height: 20, width: 20, border: 'white solid 3px', borderRadius: '50%'}} />
                <CircularProgress
                  variant="static"
                  value={progress * 100}
                  thickness={10}
                  size={15}
                  color={progress ? 'primary' : 'secondary'}
                  style={{alignSelf: 'center', position: 'absolute', width: 20, height: 20}}
                />
              </div>
              {groupIndex.name}
            </div>
          </div>
          {active && isSubMenuExpanded ?
            (<GroupItems
              currentToolName={currentToolName}
              isVerseFinished={isVerseFinished}
              getSelections={getSelections}
              changeCurrentContextId={changeCurrentContextId}
              contextId={contextId}
              groupData={groupData}
              groupHeaderComponent={this}
              filters={filters}
              manifest={manifest} />)
            : null}
        </div>
      </MuiThemeProvider>
    );
  };

  Group.propTypes = {
    manifest: PropTypes.object.isRequired,
    contextId: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    groupData: PropTypes.array.isRequired,
    isSubMenuExpanded: PropTypes.bool.isRequired,
    groupMenuExpandSubMenu: PropTypes.func.isRequired,
    openGroup: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired,
    groupIndex: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
  };

  export default withStyles(styles)(Group);