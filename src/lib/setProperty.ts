import { isObjectOrArray } from './private/isObjectOrArray';

/**
 * A helper function to set a property on an object or array at a path.
 * @since 1.0.0
 * @param input The object or array to set the property on.
 * @param path The path to the property to set.
 * @param value The value to set the property to.
 * @returns The input object or array.
 */
export function setProperty<T>(input: unknown, path: string[], value: unknown): T {
  if (path.length === 0) {
    input = value;

    return input as unknown as T;
  }

  if (!isObjectOrArray(input)) {
    return setProperty({}, path, value);
  }

  path.reduce<Record<PropertyKey, any>>((previousStep, step, index) => {
    if (!isObjectOrArray(previousStep[step])) {
      previousStep[step] = {};
    }

    if (index === path.length - 1) {
      if (Array.isArray(previousStep)) {
        previousStep[Number(step)] = value;
      } else {
        Reflect.set(previousStep, step, value);
      }
    }

    return previousStep[step];
  }, input);

  return input as unknown as T;
}
