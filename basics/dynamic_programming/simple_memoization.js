let cache = {};

const memoizedAddTo80 = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = n + 80;
    return cache[n];
  }
};
