import { isObject } from './isObject';
import type { NonNullObject } from './NonNullObject';

export function isObjectOrArray(input: unknown): input is NonNullObject | any[] {
  return isObject(input) || Array.isArray(input);
}
