import React from 'react';
import Group from '../Group';
import NoResults from '../NoResults';

const Groups = ({
  filters,
  groupsIndex = [],
  groupsData = {},
  projectSaveLocation
}) => {
  let groupComponents = <NoResults />;
  let progress;
  groupsIndex = groupsIndex.filter(groupIndex => {
    return Object.keys(groupsData).includes(groupIndex.id) && navigationHelpers.groupIsVisible(this.getGroupData(groupsData, groupIndex.id), filters);
  });
  if (groupsIndex.length) {
    groupComponents = groupsIndex.map(groupIndex => {
      let {contextId} = this.props.contextIdReducer;
      let groupId = groupIndex.id;
      let currentGroupData = this.getGroupData(groupsData, groupId);
      let active = false;

      if (contextId !== null) {
        active = contextId.groupId === groupId;
      }

      if (contextId && contextId.tool === 'wordAlignment') {
        progress = ProjectDetailsHelpers.getWordAlignmentProgressForGroupIndex(projectSaveLocation, contextId.reference.bookId, groupIndex);
      } else {
        progress = this.generateProgress(groupIndex);
      }

      const getGroupItems = (groupHeaderComponent) => {
        return this.getGroupItemComponents(currentGroupData, groupIndex, groupHeaderComponent);
      };

      return (
        <Group
          getGroupItems={getGroupItems}
          groupIndex={groupIndex}
          active={active}
          key={groupIndex.id}
          progress={progress}
          openGroup={() => this.props.actions.groupMenuChangeGroup(currentGroupData[0].contextId)}
        />
      );
    });
  }
  return groupComponents;
};

export default Groups;