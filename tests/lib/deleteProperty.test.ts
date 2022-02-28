import { deleteProperty } from '../../src';

describe('deleteProperty', () => {
  describe('can delete values from objects', () => {
    test('GIVEN object w/ paths THEN deletes at path', () => {
      expect(deleteProperty({ a: 'b' }, ['a'])).toEqual({});
      expect(deleteProperty({ a: { b: 'c' } }, ['a', 'b'])).toEqual({ a: {} });
    });
  });

  describe('can delete values from arrays', () => {
    test('GIVEN array w/ paths THEN deletes at path', () => {
      expect(deleteProperty(['a'], ['0'])).toEqual([]);
      expect(deleteProperty(['a', 'b'], ['1'])).toEqual(['a']);
    });
  });
});
