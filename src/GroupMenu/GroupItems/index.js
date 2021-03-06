import React from 'react';
import isEqual from 'deep-equal';
import * as helpers from '../helpers';
import GroupItem from '../GroupItem';

const GroupItems = ({
  changeCurrentContextId,
  groupData,
  activeGroupItemRef,
  filters,
  manifest,
  contextId,
  isVerseFinished,
  isVerseValid,
  currentToolName,
  getSelections,
}) => {
  const items = [];
  let index = 0;

  for (let i = 0, len = groupData.length; i < len; i++) {
    const groupItemData = groupData[i];

    if (!helpers.groupItemIsVisible(groupItemData, filters)) {
      continue;
    }

    let active = isEqual(groupItemData.contextId, contextId);
    let useTargetLanguageBookName = manifest.target_language && manifest.target_language.book && manifest.target_language.book.name;
    let bookName = useTargetLanguageBookName ? manifest.target_language.book.name : manifest.project.name;
    const { reference: { chapter, verse } } = groupItemData.contextId;

    items.push(
      <GroupItem
        contextId={groupItemData.contextId}
        changeCurrentContextId={changeCurrentContextId}
        key={index}
        statusBadge={helpers.getStatusBadges(groupItemData, isVerseFinished(chapter, verse), isVerseValid(chapter, verse), currentToolName)}
        activeGroupItemRef={active ? activeGroupItemRef : null}
        active={active}
        bookName={bookName}
        selectionText={getSelections(groupItemData.contextId)}
      />,
    );
    index++;
  }
  return items;
};

export default GroupItems;
