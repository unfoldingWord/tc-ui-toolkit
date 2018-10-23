import fs from 'fs';
import path from 'path';
import * as verseHelpers from '../verseHelpers';

describe('verseHelpers.verseArray', () => {
  it('should succeed with heb-12-27.grc', () => {
    generateTest('heb-12-27.grc', 'ugnt');
  });
  it('should succeed with mat-4-6', () => {
    generateTest('mat-4-6', 'ult');
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
  const fullPath = path.join("./src/ScripturePane/helpers/__test__/fixtures", filePath);
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
 * @param {object} params - optional parameters to pass to converter
 * @param {string} expectedName - optional different expected file
 */
const generateTest = (name, bibleId) => {
  const input = readJSON(`${name}.json`);
  expect(input).toBeTruthy();
  // const expectedBaseName = expectedName ? expectedName : name;
  // const expected = readUSFM(`${expectedBaseName}.usfm`);
  // expect(expected).toBeTruthy();
  const output = verseHelpers.verseArray(input, bibleId, name);
  expect(output).toMatchSnapshot();
};
