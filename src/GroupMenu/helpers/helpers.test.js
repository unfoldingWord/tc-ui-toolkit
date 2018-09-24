import * as helpers from './index';

describe('Tests for helpers', () => {
  it('forLoop() works correctly', () => {
    const result = helpers.forLoop(['1', '2', '3']);

    expect(result).toEqual(['1', '2', '3']);
  });
});
