import { isObjectOrArray } from './private/isObjectOrArray';

export const PROPERTY_NOT_FOUND = Symbol('PROPERTY_NOT_FOUND');

/**
 * A helper function to get a property from an object or array at a path.
 * @since 1.0.0
 * @param input The object or array to get the property from.
 * @param path The path to the property to get.
 * @param fallbackToInput Whether to return the input if path has a length of 0.
 * @returns The property at the path or {@link PROPERTY_NOT_FOUND} if the property does not exist.
 */
export function getProperty<T = unknown>(input: unknown, path: string[], fallbackToInput = true): T | typeof PROPERTY_NOT_FOUND {
  if (path.length === 0) {
    return fallbackToInput ? (input as unknown as T) : PROPERTY_NOT_FOUND;
  }

  if (!isObjectOrArray(input)) {
    return PROPERTY_NOT_FOUND;
  }

  return path.reduce<Record<PropertyKey, any>>((previousStep, step) => {
    if (!isObjectOrArray(previousStep)) {
      return PROPERTY_NOT_FOUND;
    }

    if ((Array.isArray(previousStep) && previousStep.length > Number(step)) || step in previousStep) {
      return (previousStep as Record<PropertyKey, any>)[step];
    }

    return PROPERTY_NOT_FOUND;
  }, input);
}
