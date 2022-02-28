import { setProperty } from '../../src';

describe('setProperty', () => {
  describe('can set values in objects', () => {
    test('GIVEN empty object w/ paths and value THEN sets data', () => {
      expect(setProperty({}, ['a'], 'b')).toEqual({ a: 'b' });
      expect(setProperty({}, ['a', 'b'], 'c')).toEqual({ a: { b: 'c' } });
    });

    test('GIVEN object w/ paths and value THEN overwrites data', () => {
      expect(setProperty({ a: 'b' }, ['a'], { b: 'c' })).toEqual({ a: { b: 'c' } });
      expect(setProperty({ a: 'b' }, ['a', 'b'], 'c')).toEqual({ a: { b: 'c' } });
    });
  });

  describe('can set values in arrays', () => {
    test('GIVEN empty array w/ paths and value THEN sets data', () => {
      expect(setProperty([], ['0'], 'a')).toEqual(['a']);
      expect(setProperty([], ['0', 'a'], 'b')).toEqual([{ a: 'b' }]);
    });

    test('GIVEN array w/ paths and value THEN overwrites data', () => {
      expect(setProperty(['a'], ['0'], 'b')).toEqual(['b']);
      expect(setProperty(['a'], ['0', 'a'], 'b')).toEqual([{ a: 'b' }]);
    });
  });
});
