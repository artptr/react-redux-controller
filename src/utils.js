/**
 * Map, but for objects. Creates an object with the same keys as `obj` and values
 * generated by running each property of `obj` through `fn`. `fn` is passed three arguments: *(value, key, obj)*.
 * @param {Function} fn A function called for each property in `obj`. Its return value will
 *        become a new property on the return object.
 * @param {Object} obj The object to iterate over.
 * @return {Object} A new object with the same keys as `obj` and values that are the result
 *         of running each property through `fn`.
 */
export function mapObj(fn, obj) {
  const result = {};

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; ++i) {
    result[keys[i]] = fn(obj[keys[i]], keys[i], obj);
  }

  return result;
}

/**
 * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
 * property is ignored.
 * @param {String[]} keys An array of String property names to copy onto a new object.
 * @param {Object} obj The object to copy from.
 * @return {Object} A new object with only properties from `keys` on it.
 */
export function pick(keys, obj) {
  const result = {};

  for (let i = 0; i < keys.length; ++i) {
    if (keys[i] in obj) {
      result[keys[i]] = obj[keys[i]];
    }
  }

  return result;
}

/**
 * Create a new object with the own properties of `a`
 * merged with the own properties of object `b`.
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @return {Object} A merged object.
 */
export function merge(a, b) {
  const result = {};

  for (let i = 0, keys = Object.keys(a); i < keys.length; ++i) {
    result[keys[i]] = a[keys[i]];
  }

  for (let i = 0, keys = Object.keys(b); i < keys.length; ++i) {
    result[keys[i]] = b[keys[i]];
  }

  return result;
}

/**
 * Merges a list of objects together into one object.
 * @param {Object|Object[]} objs An array of objects or a single object.
 * @return {Object} A merged object.
 */
export function mergeAll(objs) {
  const list = Array.isArray(objs) ? objs : [objs];

  const result = {};

  for (let i = 0; i < list.length; ++i) {
    const keys = Object.keys(list[i]);

    for (let j = 0; j < keys.length; ++j) {
      result[keys[j]] = list[i][keys[j]];
    }
  }

  return result;
}
