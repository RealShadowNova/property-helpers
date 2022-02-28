import { getProperty, PROPERTY_NOT_FOUND } from '../../src';

describe('getProperty', () => {
  describe('can get values from objects', () => {
    test('GIVEN object w/ empty path THEN gets full value', () => {
      expect(getProperty({ a: 'b' }, [])).toEqual({ a: 'b' });
      expect(getProperty({ a: { b: 'c' } }, [])).toEqual({ a: { b: 'c' } });
    });

    test('GIVEN object w/ path THEN gets value at path', () => {
      expect(getProperty({ a: 'b' }, ['a'])).toBe('b');
      expect(getProperty({ a: { b: 'c' } }, ['a'])).toEqual({ b: 'c' });
      expect(getProperty({ a: { b: 'c' } }, ['a', 'b'])).toBe('c');
    });

    test('GIVEN empty object w/ path THEN returns symbol', () => {
      expect(getProperty({}, ['a'])).toBe(PROPERTY_NOT_FOUND);
      expect(getProperty({}, ['a', 'b'])).toBe(PROPERTY_NOT_FOUND);
    });

    describe('can get values from arrays', () => {
      test('GIVEN object w/ array and path THEN gets value at path', () => {
        expect(getProperty({ a: ['b'] }, ['a', '0'])).toBe('b');
        expect(getProperty({ a: { b: ['c'] } }, ['a', 'b', '0'])).toBe('c');
      });

      test('GIVEN object and empty array w/ path THEN returns symbol', () => {
        expect(getProperty({ a: ['b'] }, ['a', '0', 'c'])).toBe(PROPERTY_NOT_FOUND);
        expect(getProperty({ a: { b: ['c'] } }, ['a', 'b', '0', 'c'])).toBe(PROPERTY_NOT_FOUND);
      });
    });
  });

  describe('can get values from arrays', () => {
    test('GIVEN array w/ empty path THEN gets full value', () => {
      expect(getProperty(['a'], [])).toEqual(['a']);
      expect(getProperty(['a', 'b'], [])).toEqual(['a', 'b']);
    });

    test('GIVEN array w/ path THEN gets value at path', () => {
      expect(getProperty(['a'], ['0'])).toBe('a');
      expect(getProperty(['a', 'b'], ['1'])).toBe('b');
    });

    test('GIVEN empty array w/ path THEN returns symbol', () => {
      expect(getProperty([], ['0'])).toBe(PROPERTY_NOT_FOUND);
      expect(getProperty([], ['1'])).toBe(PROPERTY_NOT_FOUND);
    });

    describe('can get values from objects', () => {
      test('GIVEN array w/ object and path THEN gets value at path', () => {
        expect(getProperty([{ a: 'b' }], ['0'])).toEqual({ a: 'b' });
        expect(getProperty([{ a: 'b' }], ['0', 'a'])).toBe('b');
      });

      test('GIVEN array and empty object w/ path THEN returns symbol', () => {
        expect(getProperty([{ a: 'b' }], ['0', 'c'])).toBe(PROPERTY_NOT_FOUND);
        expect(getProperty([{ a: 'b' }], ['0', 'a', 'c'])).toBe(PROPERTY_NOT_FOUND);
      });
    });
  });
});
