export function isEmpty(obj) {
  for (const key in obj) {
    if ({}.propertyIsEnumerable.call(obj, key)) {
      return false;
    }
  }
  return true;
}

export const PI = 3.14;
