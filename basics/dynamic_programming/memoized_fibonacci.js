const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const memo = (fn) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("result from cache");
      return cache[n];
    }
    console.log("result calculated");
    const res = fn(n);
    cache[n] = res;
    return res;
  };
};

const memoizedFibonacci = memo(fibonacci);

// console.log(fibonacci(8));
console.log(memoizedFibonacci(8));
console.log(memoizedFibonacci(8));
