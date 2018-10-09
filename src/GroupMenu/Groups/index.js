import React from 'react';
import PropTypes from 'prop-types';
// components
import Group from '../Group';
import NoResults from '../NoResults';
//helpers
import * as helpers from '../helpers';

import './Groups.styles.css';

const Groups = ({
  changeCurrentContextId,
  filters,
  groupsIndex = [],
  groupsData = {},
  getGroupProgress,
  groupMenuChangeGroup,
  groupMenuExpandSubMenu,
  isSubMenuExpanded,
  manifest,
  contextId,
  translate,
  getSelections,
  isVerseFinished,
  isVerseValid,
  currentToolName
}) => {
  let groupComponents = <NoResults translate={translate} />;
  groupsIndex = groupsIndex.filter(groupIndex => {
    return Object.keys(groupsData).includes(groupIndex.id) && helpers.groupIsVisible(helpers.getGroupData(groupsData, groupIndex.id), filters);
  });
  if (groupsIndex.length) {
    groupComponents = [];

    for (let i = 0, len = groupsIndex.length; i < len; i++) {
      const groupIndex = groupsIndex[i];
      let groupId = groupIndex.id;
        let currentGroupData = helpers.getGroupData(groupsData, groupId);
        let active = contextId ? contextId.groupId === groupId : false;
        groupComponents.push(
          <Group
            currentToolName={currentToolName}
            isVerseValid={isVerseValid}
            isVerseFinished={isVerseFinished}
            contextId={contextId}
            getSelections={getSelections}
            changeCurrentContextId={changeCurrentContextId}
            manifest={manifest}
            filters={filters}
            groupData={currentGroupData}
            isSubMenuExpanded={isSubMenuExpanded}
            groupIndex={groupIndex}
            active={active}
            key={groupIndex.id}
            progress={getGroupProgress(groupIndex, groupsData)}
            groupMenuExpandSubMenu={groupMenuExpandSubMenu}
            openGroup={() => groupMenuChangeGroup(currentGroupData[0].contextId)}
          />
        );
    }
  }
  return (
    <div className='groups'>
      {groupComponents}
    </div>
  );
};

Groups.propTypes = {
  changeCurrentContextId: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  groupsIndex : PropTypes.array.isRequired,
  groupsData : PropTypes.object.isRequired,
  getGroupProgress: PropTypes.func.isRequired,
  groupMenuChangeGroup: PropTypes.func.isRequired,
  groupMenuExpandSubMenu: PropTypes.func.isRequired,
  isSubMenuExpanded: PropTypes.bool.isRequired,
  manifest: PropTypes.object.isRequired,
  contextId: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  getSelections: PropTypes.func.isRequired,
  isVerseFinished: PropTypes.func.isRequired,
  isVerseValid: PropTypes.func.isRequired,
  currentToolName: PropTypes.string.isRequired
};

export default Groups;
