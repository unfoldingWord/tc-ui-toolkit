import React from 'react';
import * as helpers from '../helpers';
import GroupItem from '../GroupItem';
import isEqual from 'deep-equal';

const GroupItems = ({
  changeCurrentContextId,
  groupData,
  groupHeaderComponent,
  filters,
  manifest,
  selections,
  contextId
}) => {
  const items = [];
  let index = 0;
  for (let groupItemData of groupData) {
    if (!helpers.groupItemIsVisible(groupItemData, filters)) {
      continue;
    }

    let active = isEqual(groupItemData.contextId, contextId);
    let useTargetLanguageBookName = manifest.target_language && manifest.target_language.book && manifest.target_language.book.name;
    let bookName = useTargetLanguageBookName ? manifest.target_language.book.name : manifest.project.name;

    items.push(
      <GroupItem
        changeCurrentContextId={changeCurrentContextId}
        key={index}
        statusBadge={helpers.getStatusBadge(groupItemData)}
        groupMenuHeader={groupHeaderComponent}
        scrollIntoView={helpers.scrollIntoView}
        active={active}
        bookName={bookName}
        selectionText={selections}
        inView={helpers.inView}
      />
    );
    index++;
  }
  return items;
};

export default GroupItems;