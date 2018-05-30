import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactTooltip from 'react-tooltip';
import {Glyphicon} from 'react-bootstrap';
import InvalidatedIcon from '../GroupsMenuFilter/InvalidatedIcon';
const MENU_BAR_HEIGHT = 30;
const MENU_ITEM_HEIGHT = 38;

export function getGroupData(groupsData, groupId) {
  let groupData;
  if (groupsData !== undefined) {
    groupData = groupsData[groupId];
  }
  return groupData;
}

export const getFilterCount = (filters) => {
  return Object.keys(filters).filter(k => filters[k]).length;
};

/**
 * @description - Determines if the item should be navigatable
 * @param {object} groupItemData 
 * @returns {boolean}
 */
export const groupItemIsVisible = (groupItemData, filters) => {
  return (!getFilterCount(filters) ||
    ((filters.invalidated && groupItemData.invalidated)
      || (filters.reminders && groupItemData.reminders)
      || (filters.selections && groupItemData.selections)
      || (filters.noSelections && !groupItemData.selections)
      || (filters.verseEdits && groupItemData.verseEdits)
      || (filters.comments && groupItemData.comments)
    ));
};

/**
 * @description - Determines if the group is navigatable based on filters
 * @param {object} groupData
 * @returns {boolean}
 */
export const groupIsVisible = (groupData, filters) => {
  if (!getFilterCount(filters)) {
    return true;
  }
  for (let groupItemData of groupData) {
    if (groupItemIsVisible(groupItemData, filters)) {
      return true;
    }
  }
  return false;
};

export function scrollIntoView({current}) {
  if (current)
    current.scrollIntoView({block: 'end', behavior: 'smooth'});
}

/**
* @description - Tests if the the two elements are in the scope of the window (scroll bar)
* The consts MENU_BAR_HEIGHT & MENU_ITEM_HEIGHT are set to account for the static window avialablity
* @param {object} currentGroupMenu - The current group menu header that is extended/actived (i.e. Metaphors)
* @param {object} currentGroupItem - The current group check item that is active (i.e. Luke 1:1)
*/
export function inView({current: currentGroupMenu}, {current: currentGroupItem}) {
  if (currentGroupMenu && currentGroupItem) {
    var rectGroup = currentGroupMenu.getBoundingClientRect();
    var rectItem = currentGroupItem.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return Math.abs(rectGroup.top - rectItem.top) + MENU_BAR_HEIGHT + MENU_ITEM_HEIGHT <= viewHeight;
  }
}

/**
* @description - gets the status badge component for the group menu row
* @param {object} groupItemData
*/
export function getStatusBadges(groupItemData, verseFinished, currentToolName) {
  const glyphs = [];

  if (groupItemData && groupItemData.contextId && groupItemData.contextId.reference) {
    // The below ifs are in order of precedence of the status badges we show
    if (groupItemData.invalidated) glyphs.push('invalidated');
    if (groupItemData.reminders) glyphs.push('bookmark');
    if (groupItemData.selections || verseFinished) glyphs.push('ok');
    if (groupItemData.verseEdits) glyphs.push('pencil');
    if (groupItemData.comments) glyphs.push('comment');
  }

  return makeStatusBadgeComponents(glyphs);
}

/**
 * @description - Takes an array of glyph names, gets their React components and then renders the status badge
 * with the first icon and then a mouse-over tooltip with the rest of the icons and a chip to say how many icons there are.
 * @param {*} glyphs 
 */
export function makeStatusBadgeComponents(glyphs) {
  const statusGlyphs = getGlyphIcons(glyphs);
  const mainGlyph = statusGlyphs[0];
  if (statusGlyphs.length > 1) {
    const tooltip = ReactDOMServer.renderToString(statusGlyphs);
    return (
      <div className="status-badge-wrapper">
        <div
          className="status-badge"
          data-tip={tooltip}
          data-html="true"
          data-place="bottom"
          data-effect="float"
          data-class="status-tooltip"
          data-delay-hide="100"
          data-offset="{'bottom': -5, 'right': 5}" >
          {mainGlyph}
          <div className="badge">
            {statusGlyphs.length}
          </div>
        </div>
        <ReactTooltip />
      </div>
    );
  } else {
    return (
      <div className="status-badge-wrapper">
        <div className="status-badge">
          {mainGlyph}
        </div>
      </div>
    );
  }
}


/**
 * @description - Takes an array of strings that are glyph names and gets the proper React component to render them
 * @param {*} glyphs 
 */
export function getGlyphIcons(glyphs) {
  const glyphicons = [];
  if (glyphs && glyphs.length) {
    glyphs.forEach((glyph) => {
      if (glyph === 'invalidated') {
        glyphicons.push(<div key={glyph} className={'glyphicon glyphicon-invalidated'}><InvalidatedIcon height={16} width={16} /></div>);
      } else {
        let className = 'status-icon-' + glyph;
        glyphicons.push(<Glyphicon key={glyph} glyph={glyph} className={className} />);
      }
    });
  } else {
    glyphicons.push(<div key="blank" className="glyphicon glyphicon-blank status-icon-blank" />);
  }
  return glyphicons;
}