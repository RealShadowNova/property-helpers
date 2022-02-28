import { isObjectOrArray } from './private/isObjectOrArray';

/**
 * A helper function to check if an object or array has a property at a path.
 * @since 1.0.0
 * @param input The object or array to check the property at the path.
 * @param path  The path to the property to check.
 * @returns Whether the property at the path exists.
 */
export function hasProperty(input: unknown, path: string[]): boolean {
  if (path.length === 0) return true;
  if (!isObjectOrArray(input)) return false;

  let result = false;

  path.reduce<Record<PropertyKey, any>>((previousStep, step, index) => {
    if (!isObjectOrArray(previousStep)) return previousStep;
    if (index === path.length - 1 && ((Array.isArray(previousStep) && previousStep.length > Number(step)) || step in previousStep)) result = true;

    return (previousStep as Record<PropertyKey, any>)[step];
  }, input);

  return result;
}
