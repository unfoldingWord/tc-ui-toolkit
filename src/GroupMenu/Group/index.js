import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Glyphicon} from 'react-bootstrap';
// components
import GroupItems from '../GroupItems';
// helpers
import {scrollIntoView, inView, isInViewport} from '../helpers';

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.activeGroupItemRef = React.createRef();
    this.groupRef = React.createRef();
    this.scrollToCurrentCheck = this.scrollToCurrentCheck.bind(this);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  scrollToCurrentCheck() {
    if (inView(this.groupRef, this.activeGroupItemRef)) {
      //If the menu and current check are able to be rendered in the
      //same window scroll to the group menu item
      scrollIntoView(this.groupRef);
    }
    else {
      //Scroll to the current check item
      scrollIntoView(this.activeGroupItemRef);
    }
  }

  componentDidMount() {
    if (this.props.active) {
      this.scrollToCurrentCheck();
    }
  }

  componentDidUpdate(prevProps) {
    const {contextId: oldContext} = prevProps;
    const {active, contextId: newContext} = this.props;
    if(active && newContext.groupId !== oldContext.groupId) {
      // scroll to menu if out of view
      if(!isInViewport(this.groupRef)) {
        scrollIntoView(this.groupRef);
      }
    }
  }

  onMenuClick() {
    const {
      active,
      openGroup,
      isSubMenuExpanded,
      groupMenuExpandSubMenu
    } = this.props;

    const menuAction = active ? groupMenuExpandSubMenu : openGroup;
    const expandMenu = !isSubMenuExpanded;
    menuAction(expandMenu);
  }

  render() {
    const {
      changeCurrentContextId,
      active,
      isSubMenuExpanded,
      progress,
      groupIndex,
      groupData,
      filters,
      manifest,
      contextId,
      getSelections,
      isVerseFinished,
      isVerseValid,
      currentToolName
    } = this.props;
    let groupMenuItemHeadingClassName = active ? 'menu-item-heading-current' : 'menu-item-heading-normal';

    let expandedGlyph = (
      <Glyphicon glyph="chevron-down" style={{float: 'right', marginTop: '3px'}}/>
    );
    let collapsedGlyph = (
      <Glyphicon glyph="chevron-right" style={{float: 'right', marginTop: '3px'}}/>
    );
    return (
        <div className="group">
          <div ref={this.groupRef}
               onClick={this.onMenuClick}
               className={groupMenuItemHeadingClassName}>
            {active && isSubMenuExpanded ? expandedGlyph : collapsedGlyph}
            <div style={{display: 'flex'}}>
              <div style={{position: 'relative', justifyContent: 'center', height: 20, width: 20, display: 'flex', marginRight: '10px', float: 'left'}}>
                <div style={{height: 20, width: 20, border: 'white solid 3px', borderRadius: '50%'}} />
                <CircularProgress
                  variant="static"
                  value={progress * 100}
                  thickness={10}
                  size={15}
                  color={'primary'}
                  style={{alignSelf: 'center', position: 'absolute', width: 20, height: 20, color:'#40BDF2'}}
                />
              </div>
              {groupIndex.name}
            </div>
          </div>
          {active && isSubMenuExpanded ?
            (<GroupItems
              currentToolName={currentToolName}
              isVerseFinished={isVerseFinished}
              isVerseValid={isVerseValid}
              getSelections={getSelections}
              changeCurrentContextId={changeCurrentContextId}
              contextId={contextId}
              groupData={groupData}
              activeGroupItemRef={this.activeGroupItemRef}
              filters={filters}
              manifest={manifest} />)
            : null}
        </div>
    );
  }
}

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
  active: PropTypes.bool.isRequired,
  changeCurrentContextId: PropTypes.func.isRequired,
  getSelections: PropTypes.func.isRequired,
  isVerseFinished: PropTypes.func.isRequired,
  isVerseValid: PropTypes.func.isRequired,
  currentToolName: PropTypes.string.isRequired,
};

export default Group;
