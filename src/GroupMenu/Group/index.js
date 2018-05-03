import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { Glyphicon } from 'react-bootstrap';

class Group extends React.Component {

  render() {
    let groupMenuItemHeadingClassName = this.props.active ? 'menu-item-heading-current' : 'menu-item-heading-normal';

    let glyphAction = this.props.active ? this.props.actions.groupMenuExpandSubMenu : this.props.openGroup;
    let expandedGlyph = (
      <Glyphicon glyph="chevron-down" style={{ float: 'right', marginTop: '3px' }} onClick={glyphAction.bind(this, false)} />
    );
    let collapsedGlyph = (
      <Glyphicon glyph="chevron-right" style={{ float: 'right', marginTop: '3px' }} onClick={glyphAction.bind(this, true)} />
    );

    const { isSubMenuExpanded } = this.props.groupMenuReducer;
  
    return (
      <MuiThemeProvider>
        <div className="group">
          <div className={groupMenuItemHeadingClassName}>
            {this.props.active && isSubMenuExpanded ? expandedGlyph : collapsedGlyph}
            <div onClick={this.props.openGroup}>
            <div style={{ marginRight: '10px', float: 'left', border: 'white solid 3px', borderRadius: '50%', width: '20px', height: '20px'}}>
              <CircularProgress
                variant="determinate"
                value={this.props.progress * 100}
                thickness={3}
                size={20}
                color={ this.props.progress ? "var(--accent-color-light)" : 'white'}
                style={{right:3, bottom:3}}
              />
              </div>
              {this.props.groupIndex.name}
            </div>
          </div>
          {this.props.active && isSubMenuExpanded ? this.props.getGroupItems(this) : null}
        </div>
      </MuiThemeProvider>
    );
  }

}

Group.propTypes = {
  groupMenuReducer: PropTypes.any.isRequired,
  actions: PropTypes.shape({
    groupMenuExpandSubMenu: PropTypes.func.isRequired
  }),
  openGroup: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  groupIndex: PropTypes.object.isRequired,
  getGroupItems: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Group;