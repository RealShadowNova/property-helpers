import type { NonNullObject } from './NonNullObject';

export function isObject(input: unknown): input is NonNullObject {
  return typeof input === 'object' ? input?.constructor === Object : false;
}
