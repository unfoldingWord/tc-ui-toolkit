import React from 'react';
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
  currentToolName
}) => {
  let groupComponents = <NoResults translate={translate} />;
  groupsIndex = groupsIndex.filter(groupIndex => {
    return Object.keys(groupsData).includes(groupIndex.id) && helpers.groupIsVisible(helpers.getGroupData(groupsData, groupIndex.id), filters);
  });
  if (groupsIndex.length) {
    groupComponents = groupsIndex.map(groupIndex => {
      let groupId = groupIndex.id;
      let currentGroupData = helpers.getGroupData(groupsData, groupId);
      let active = contextId ? contextId.groupId === groupId : false;
      return (
        <Group
          currentToolName={currentToolName}
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
    });
  }
  return (
    <div className='groups'>
    {groupComponents}
    </div>
  );
};

export default Groups;
