import { getReferenceStr, getTitleStr } from '..';

/**
 * Helper utility to generate data for the menu.
 * @param {[]} index - the group index
 * @param {object} data - the group data
 * @param {string} direction - layout direction - default 'ltr'
 * @param {string} progressKey - the key by which the group progress will be measured
 * @param {function} [onProcessItem=null] - an optional callback to perform additional processing on a menu item. This is executed before the `progressKey` is evaluated.
 * @param {string} progressKey2 - the secondary key by which the group progress will be measured
 * @returns {[]} the menu data
 */
export function generateMenuData(
  index,
  data,
  progressKey,
  direction = 'ltr',
  onProcessItem = null,
  progressKey2 = null,
) {
  const menu = [];
  const dataKeys = Object.keys(data);

  for (let i = 0, len = index.length; i < len; i++) {
    const entry = index[i];

    if (dataKeys.includes(entry.id)) {
      // generate menu group
      const group = data[entry.id];
      const gl = group.length;
      const children = new Array(gl);

      for (let j = 0; j < gl; j++) {
        const item = processMenuItem(group[j], direction);
        children[j] = onProcessItem ? onProcessItem(item) : item;
      }
      menu.push({
        title: entry.name,
        progress: calculateProgress(children, progressKey, progressKey2),
        id: entry.id,
        children,
      });
    }
  }

  return menu;
}



/**
 * Produces a valid menu item from a context id or a group data entry.
 * This is useful for pre-processing the active entry.
 * @param {object} contextId - a context id or group data entry.
 * @param {string} direction - layout direction - default 'ltr'
 * @param {function} [onProcessItem=null] - an optional preprocessor
 * @returns {object}
 */
export function generateMenuItem(contextId, direction = 'ltr', onProcessItem = null) {
  // TRICKY: determine if this is a contextId or group data entry.
  let item;

  if (contextId.hasOwnProperty('contextId')) {
    item = contextId;
  } else {
    item = { contextId };
  }
  item.direction = direction;

  // perform pre-processing
  if (typeof onProcessItem === 'function') {
    return onProcessItem(processMenuItem(item));
  } else {
    return processMenuItem(item);
  }
}

/**
 * Calculates the progress over an array of objects
 * @param {object[]} data - an array of objects
 * @param {string} progressKey - the key used to check the completion status of each object
 * @param {string} progressKey2 - the secondary key used to check the completion status of each object
 * @returns {number} - returns a number between 0 and 100 inclusive
 */
function calculateProgress(data, progressKey, progressKey2) {
  const total = data.length;
  let completed = 0;

  for (let i = 0, len = data.length; i < len; i ++) {
    if (data[i][progressKey] || (progressKey2 && data[i][progressKey2])) {
      completed++;
    }
  }
  return (completed / total) * 100;
}

/**
 * Performs some default child generation operations.
 * For advanced menu item customization you should provide a callback to {@link generateMenuData}
 * @param {object} data - the menu item data
 * @returns {object} - the formatted menu item data
 */
function processMenuItem(data) {
  // TRICKY: use the context id to pre-populate some fields
  const {
    contextId: {
      groupId,
      reference: {
        bookId, chapter, verse,
      },
    },
  } = data;
  const refStr = getReferenceStr(chapter, verse);
  const passageTitle = getTitleStr(bookId, refStr, data.direction);

  return {
    ...data,
    groupId,
    itemId: passageTitle,
    title: passageTitle,
  };
}
