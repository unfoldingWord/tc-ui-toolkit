/* eslint-env jest */
import _ from 'lodash';
import { optimizeSelections } from '../selectionHelpers';

describe('selectionHelpers.optimizeSelections', () => {
  const string = 'This is a random quote string for testing the odd  random quote   ';

  it('should not trim valid selections', () => {
    // given
    const selections_ = [
      { text: 'is a', occurrence: 1, occurrences: 1 },
      { text: 'random quote', occurrence: 2, occurrences: 2 },
    ];

    // when
    const selections = optimizeSelections(string, _.cloneDeep(selections_));

    // then
    expect(selections).toEqual(selections_);
  });

  it('should trim leading spaces', () => {
    // given
    const selections_ = [
      { text: ' is a', occurrence: 1, occurrences: 1 },
      { text: '  random quote', occurrence: 2, occurrences: 2 },
    ];
    const expectedSelections = [
      { text: 'is a', occurrence: 1, occurrences: 1 },
      { text: 'random quote', occurrence: 2, occurrences: 2 },
    ];

    // when
    const selections = optimizeSelections(string, _.cloneDeep(selections_));

    // then
    expect(selections).toEqual(expectedSelections);
  });

  it('should trim trailing spaces', () => {
    // given
    const selections_ = [
      { text: 'is a ', occurrence: 1, occurrences: 1 },
      { text: 'random quote  ', occurrence: 2, occurrences: 2 },
    ];
    const expectedSelections = [
      { text: 'is a', occurrence: 1, occurrences: 1 },
      { text: 'random quote', occurrence: 2, occurrences: 2 },
    ];

    // when
    const selections = optimizeSelections(string, _.cloneDeep(selections_));

    // then
    expect(selections).toEqual(expectedSelections);
  });

  it('should remove empty selections', () => {
    // given
    const selections_ = [
      { text: 'is a', occurrence: 1, occurrences: 1 },
      { text: '', occurrence: 1, occurrences: 0 },
      { text: 'random quote', occurrence: 2, occurrences: 2 },
    ];
    const expectedSelections = [
      { text: 'is a', occurrence: 1, occurrences: 1 },
      { text: 'random quote', occurrence: 2, occurrences: 2 },
    ];

    // when
    const selections = optimizeSelections(string, _.cloneDeep(selections_));

    // then
    expect(selections).toEqual(expectedSelections);
  });

  it('should remove space selections', () => {
    // given
    const selections_ = [
      { text: 'is a', occurrence: 1, occurrences: 1 },
      { text: '  ', occurrence: 1, occurrences: 1 },
      { text: 'random quote', occurrence: 2, occurrences: 2 },
    ];
    const expectedSelections = [
      { text: 'is a', occurrence: 1, occurrences: 1 },
      { text: 'random quote', occurrence: 2, occurrences: 2 },
    ];

    // when
    const selections = optimizeSelections(string, _.cloneDeep(selections_));

    // then
    expect(selections).toEqual(expectedSelections);
  });});

