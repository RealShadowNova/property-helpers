import { hasProperty } from './hasProperty';
import { isObjectOrArray } from './private/isObjectOrArray';
import { setProperty } from './setProperty';

/**
 * A helper function to delete a property from an object or array at a path.
 * @since 1.0.0
 * @param input The object or array to delete the property from.
 * @param path The path to the property to delete.
 * @returns The input object or array.
 */
export function deleteProperty<T>(input: unknown, path: string[]): T {
  if (path.length === 0 || !isObjectOrArray(input) || !hasProperty(input, path)) {
    return input as unknown as T;
  }

  path.reduce<Record<PropertyKey, any>>((previousStep, step, index) => {
    if (!isObjectOrArray(previousStep)) {
      return previousStep;
    }

    if (index === path.length - 1) {
      if (Array.isArray(previousStep) && previousStep.length > Number(step)) {
        input = setProperty(
          input,
          path.slice(0, -1),
          previousStep.filter((_, i) => i !== Number(step))
        );
      } else if (step in previousStep) {
        Reflect.deleteProperty(previousStep, step);
      }
    }

    return (previousStep as Record<PropertyKey, any>)[step];
  }, input);

  return input as unknown as T;
}
