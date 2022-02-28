import { isObjectOrArray } from '../../../src/lib/private';

describe('isObjectOrArray', () => {
  test('GIVEN object THEN returns true', () => {
    expect(isObjectOrArray({})).toBe(true);
  });

  test('GIVEN array THEN returns true', () => {
    expect(isObjectOrArray([])).toBe(true);
  });

  test('GIVEN invalid values THEN returns false', () => {
    expect(isObjectOrArray('')).toBe(false);
    expect(isObjectOrArray(0)).toBe(false);
    expect(isObjectOrArray(true)).toBe(false);
    expect(isObjectOrArray(null)).toBe(false);
    expect(isObjectOrArray(undefined)).toBe(false);
    expect(isObjectOrArray(() => '')).toBe(false);
  });
});
