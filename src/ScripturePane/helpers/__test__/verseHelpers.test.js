import fs from 'fs';
import path from 'path';
import * as verseHelpers from '../verseHelpers';

describe('verseHelpers.verseArray', () => {
  it('should succeed with heb-12-27.el-x-koine', () => {
    generateTest('heb-12-27.el-x-koine', 'ugnt');
  });
  it('should succeed with heb-12-27.el-x-koine and tisch should not be clickable', () => {
    generateTest('heb-12-27.el-x-koine', 'tisch');
  });
  it('should succeed with mat-4-6', () => {
    generateTest('mat-4-6', 'ult');
  });
  it('should succeed with luke-22-30.ult', () => {
    const contextId = {
      'reference': {
        'bookId': 'luk',
        'chapter': 22,
        'verse': 30,
      },
      'tool': 'translationWords',
      'groupId': '12tribesofisrael',
      'quote': [
        {
          'word': 'δώδεκα',
          'occurrence': 1,
        },
        {
          'word': 'φυλὰς',
          'occurrence': 1,
        },
        {
          'word': 'κρίνοντες',
          'occurrence': 1,
        },
        {
          'word': 'τοῦ',
          'occurrence': 1,
        },
        {
          'word': 'Ἰσραήλ',
          'occurrence': 1,
        },
      ],
      'strong': [
        'G14270',
        'G54430',
        'G29190',
        'G35880',
        'G24740',
      ],
      'occurrence': 1,
    };
    generateTest('luke-22-30.ult', 'ult', contextId);
  });
  it('should succeed with jhn-6-21-en-t4t', () => {
    generateTest('jhn-6-21-en-t4t', 't4t');
  });
});

//
// helpers
//

/**
 * Reads a usfm file from the resources dir
 * @param {string} filePath relative path to usfm file
 * @return {string} sdv
 */
export const readUSFM = filePath => {
  const fullPath = path.join('./src/ScripturePane/helpers/__test__/fixtures', filePath);
  console.log(path.resolve(fullPath));
  return fs.readFileSync(fullPath, 'UTF-8').toString();
};

/**
 * Reads a json file from the resources dir
 * @param {string} filePath relative path to json file
 * @return {object} json object
 */
export const readJSON = filePath => JSON.parse(readUSFM(filePath));

/**
 * Generator for testing json to usfm migration
 * @param {string} name - the name of the test files to use. e.g. `valid` will test `valid.usfm` to `valid.json`
 * @param {string} bibleId
 * @param {Object} contextId
 */
const generateTest = (name, bibleId, contextId='') => {
  const input = readJSON(`${name}.json`);
  contextId = contextId || name;
  expect(input).toBeTruthy();
  // const expectedBaseName = expectedName ? expectedName : name;
  // const expected = readUSFM(`${expectedBaseName}.usfm`);
  // expect(expected).toBeTruthy();
  const output = verseHelpers.verseArray(input, bibleId, contextId);
  expect(output).toMatchSnapshot();
};
