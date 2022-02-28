import { hasProperty } from '../../src';

describe('hasProperty', () => {
  describe('can check values from objects', () => {
    test('GIVEN empty object w/ path THEN returns false', () => {
      expect(hasProperty({}, ['a'])).toBe(false);
      expect(hasProperty({}, ['a', 'b'])).toBe(false);
    });

    test('GIVEN object w/ path THEN returns true', () => {
      expect(hasProperty({ a: 'b' }, ['a'])).toBe(true);
      expect(hasProperty({ a: { b: 'c' } }, ['a'])).toBe(true);
      expect(hasProperty({ a: { b: 'c' } }, ['a', 'b'])).toBe(true);
    });
  });

  describe('can check values from arrays', () => {
    test('GIVEN empty array w/ path THEN returns false', () => {
      expect(hasProperty([], ['0'])).toBe(false);
      expect(hasProperty([], ['1'])).toBe(false);
    });

    test('GIVEN array w/ path THEN returns true', () => {
      expect(hasProperty(['a'], ['0'])).toBe(true);
      expect(hasProperty(['a', { b: 'c' }], ['1', 'b'])).toBe(true);
    });
  });
});
