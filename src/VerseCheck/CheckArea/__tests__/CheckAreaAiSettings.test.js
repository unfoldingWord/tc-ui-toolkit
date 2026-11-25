/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import CheckArea from '../index';

const flush = () => new Promise(resolve => setTimeout(resolve, 0));

/** mounts CheckArea in select mode with the given saved checking settings */
async function mountWithSettings(savedSettings) {
  const saveSettingsForChecking = jest.fn();
  const props = {
    mode: 'select',
    tags: [],
    comment: '',
    verseText: 'Tenemos la fe.',
    unfilteredVerseText: 'Tenemos la fe.',
    translate: key => key,
    contextId: {
      reference: {
        bookId: 'tit', chapter: 1, verse: 1,
      },
      groupId: 'faith',
      quote: 'πίστιν',
      occurrence: 1,
    },
    selections: [],
    newSelections: [],
    invalidated: false,
    targetBible: {},
    bookDetails: { id: 'tit' },
    alignedGLText: 'faith',
    handleComment: jest.fn(),
    toolsSettings: {},
    isVerseChanged: false,
    nothingToSelect: false,
    openAlertDialog: jest.fn(),
    handleEditVerse: jest.fn(),
    setToolSettings: jest.fn(),
    maximumSelections: 10,
    handleTagsCheckbox: jest.fn(),
    validateSelections: jest.fn(),
    checkIfVerseChanged: jest.fn(),
    checkIfCommentChanged: jest.fn(),
    targetLanguageDetails: { id: 'es-419', direction: 'ltr' },
    changeSelectionsInLocalState: jest.fn(),
    getSuggestions: jest.fn(() => Promise.resolve({ suggestions: [] })),
    saveSettingsForChecking,
    readSettingsForChecking: () => savedSettings,
    getModelsForChecking: jest.fn(() => Promise.resolve({ models: [], error: false })),
  };
  let wrapper;

  await act(async () => {
    wrapper = mount(<CheckArea {...props} />);
    await flush();
  });
  wrapper.update();
  return { wrapper, saveSettingsForChecking };
}

/** the checkbox in the configure AI dialog whose label is `labelKey` */
function findDialogCheckbox(wrapper, labelKey) {
  return wrapper.find('label').filterWhere(label => label.text().includes(labelKey)).find('input[type="checkbox"]');
}

async function openDialog(wrapper) {
  await act(async () => {
    wrapper.find('button').filterWhere(button => button.text() === 'suggestions.configure_ai').simulate('click');
    await flush();
  });
  wrapper.update();
}

describe('CheckArea configure AI dialog: use word alignments', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('is off when never saved, and saving the dialog saves it checked', async () => {
    const { wrapper, saveSettingsForChecking } = await mountWithSettings({ suggestionsEnabled: true });
    await openDialog(wrapper);
    const checkbox = findDialogCheckbox(wrapper, 'suggestions.use_alignment_history');

    expect(checkbox).toHaveLength(1);
    expect(checkbox.prop('checked')).toBe(false);

    await act(async () => {
      checkbox.simulate('change', { target: { checked: true } });
      await flush();
    });
    wrapper.update();

    await act(async () => {
      wrapper.find('button').filterWhere(button => button.text() === 'suggestions.save').simulate('click');
      await flush();
    });

    const [saved, noRestart] = saveSettingsForChecking.mock.calls[saveSettingsForChecking.mock.calls.length - 1];
    expect(saved.llmUseAlignmentHistory).toBe(true);
    expect(noRestart).toBe(true);
  });

  test('shows the saved setting and keeps it when other settings are saved', async () => {
    const { wrapper, saveSettingsForChecking } = await mountWithSettings({ suggestionsEnabled: true, llmUseAlignmentHistory: true });
    await openDialog(wrapper);
    expect(findDialogCheckbox(wrapper, 'suggestions.use_alignment_history').prop('checked')).toBe(true);

    await act(async () => {
      wrapper.find('label').filterWhere(label => label.text().includes('suggestions.use_ai')).find('input').first()
        .simulate('change', { target: { checked: true } });
      await new Promise(resolve => setTimeout(resolve, 1500)); // the checkbox change is debounced
    });

    const calls = saveSettingsForChecking.mock.calls;
    expect(calls.length).toBeGreaterThan(0);
    expect(calls[calls.length - 1][0].llmUseAlignmentHistory).toBe(true);
  });
});
