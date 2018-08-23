import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

class GroupItem extends React.Component {
  render() {
    const {
      changeCurrentContextId,
      contextId,
      active,
      statusBadge,
      selectionText,
      bookName,
      activeGroupItemRef
    } = this.props;
    const {reference} = contextId;
    return (
      <div ref={activeGroupItemRef} onClick={() => changeCurrentContextId(contextId)}
        className={"group-item" + (active ? " active active-submenu-item" : " submenu-item")}>
        {statusBadge}
        <span
          className="selection"
          data-tip={selectionText}
          data-place="bottom"
          data-effect="float"
          data-type="dark"
          data-class="selection-tooltip"
          data-delay-hide="100">
          {reference.chapterVerseMenu ?
            <span className={'group-item-text'}>
              {`${reference.text} ${reference.verse}`}
            </span>
            :
            <span className={'group-item-text'}>
              {" " + bookName + " " + reference.chapter + ":" + reference.verse + " " + selectionText}
            </span>
          }
        </span>
        {/*<ReactTooltip />*/}
      </div>
    );
  }
}

GroupItem.propTypes = {
  bookName: PropTypes.string.isRequired,
  selectionText: PropTypes.string.isRequired,
  contextId: PropTypes.object.isRequired,
  changeCurrentContextId: PropTypes.func.isRequired,
  statusBadge: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  groupMenuHeader: PropTypes.object,
  activeGroupItemRef: PropTypes.object,
};

export default GroupItem;
