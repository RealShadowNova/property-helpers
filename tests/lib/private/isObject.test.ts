import { isObject } from '../../../src/lib/private';

describe('isObject', () => {
  test('GIVEN object THEN returns true', () => {
    expect(isObject({})).toBe(true);
  });

  test('GIVEN invalid values THEN returns false', () => {
    expect(isObject('')).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(() => '')).toBe(false);
  });
});
