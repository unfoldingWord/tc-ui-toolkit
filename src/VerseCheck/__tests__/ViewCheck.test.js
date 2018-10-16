/* eslint-env jest */
import React from 'react';
import VerseCheck from '../VerseCheck';
import renderer from 'react-test-renderer';

const mock_translate = (text) => (text);
const base_props = require('./fixtures/project/loadedProjectShortened');
let currentInvalidated = false;
let currentEdited = false;

describe('VerseCheck component:', () => {
  currentInvalidated = false;
  currentEdited = false;

  test('Integrated View test', () => {
    // given
    const props = getBasePropertiesAndMockActions();
    currentInvalidated = false;
    currentEdited = false;

    // when
    const component = renderer.create(
        <VerseCheck {...props} />
    );

    // then
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Integrated View test with verseEdit', () => {
    // given
    const props = getBasePropertiesAndMockActions();
    currentInvalidated = false;
    currentEdited = true;

    // when
    const component = renderer.create(
        <VerseCheck {...props} />
    );

    // then
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Integrated View test with invalidated', () => {
    // given
    const props = getBasePropertiesAndMockActions();
    currentInvalidated = true;
    currentEdited = false;

    // when
    const component = renderer.create(
      <VerseCheck {...props} />
    );

    // then
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Integrated View test with default and invalidated', () => {
    // given
    const props = getBasePropertiesAndMockActions();
    props.mode = ''; // default mode
    currentInvalidated = true;
    currentEdited = false;

    // when
    const component = renderer.create(
      <VerseCheck {...props} />
    );

    // then
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Integrated View test - edit mode', () => {
    // given
    const props = getBasePropertiesAndMockActions();
    currentInvalidated = false;
    currentEdited = false;
    props.mode = "edit";

    // when
    const component = renderer.create(
      <VerseCheck {...props} />
    );

    // then
    expect(component.toJSON()).toMatchSnapshot();
  });
});

//
// helpers
//

function addMockActions(props) {
  props.actions = {
    handleGoToNext: () => jest.fn(),
    handleGoToPrevious: () => jest.fn(),
    handleOpenDialog: () => jest.fn(),
    handleCloseDialog: () => jest.fn(),
    skipToNext: () => jest.fn(),
    skipToPrevious: () => jest.fn(),
    changeSelectionsInLocalState: () => jest.fn(),
    changeMode: () => jest.fn(),
    handleComment: () => jest.fn(),
    checkComment: () => jest.fn(),
    cancelComment: () => jest.fn(),
    saveComment: () => jest.fn(),
    handleTagsCheckbox: () => jest.fn(),
    handleEditVerse: () => jest.fn(),
    checkVerse: () => jest.fn(),
    cancelEditVerse: () => jest.fn(),
    saveEditVerse: () => jest.fn(),
    validateSelections: () => jest.fn(),
    toggleReminder: () => jest.fn(),
    openAlertDialog: () => jest.fn(),
    selectModalTab: () => jest.fn(),
    cancelSelection: () => jest.fn(),
    clearSelection: () => jest.fn(),
    saveSelection: () => jest.fn()
  };
  return {
    ...props,
    translate: mock_translate,
    cancelSelection: () => jest.fn(),
    clearSelection: () => jest.fn(),
    saveSelection: () => jest.fn(),
    goToNextOrPrevious: "next",
    findIfVerseEdited: jest.fn(() => {
      return ( currentEdited); }),
    findIfVerseInvalidated: jest.fn(() => {
      return (currentInvalidated); })
  };
}

function getBasePropertiesAndMockActions() {
  // clone properties so we can modify before test
  let props = JSON.parse(JSON.stringify(base_props));
  props = addMockActions(props);
  return props;
}
