/**
 * Creates a copy of `fn` that caches the last result.
 * If called again with the same parameters, the cached result is returned.
 */
export function memoize(
  fn,
  cacheSize = 1
) {
  const cache = [];

  return function (...args) {
    for (const { args: lastArgs, result: lastResult } of cache) {
      if (lastArgs.every((arg, i) => arg === args[i])) {
        return lastResult;
      }
    }

    const entry = {
      args,
      result: fn(...args)
    };
    cache.push(entry);
    while (cache.length > cacheSize) {
      cache.shift();
    }

    return entry.result;
  };
}
