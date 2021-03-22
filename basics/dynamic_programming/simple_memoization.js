let cache = {};

const memoizedAddTo80 = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = n + 80;
    return cache[n];
  }
};

const memoizedAddTo80Closure = () => {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("from cache");
      return cache[n];
    } else {
      console.log("not from cache");
      cache[n] = n + 80;
      return cache[n];
    }
  };
};

const memoized = memoizedAddTo80Closure();

console.log(memoized(5));
console.log(memoized(5));
