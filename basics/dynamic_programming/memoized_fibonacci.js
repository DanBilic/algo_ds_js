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

const fibCached = () => {
  let cache = {};
  return (fib = (n) => {
    if (n in cache) {
      console.log("result from cache: ", cache[n]);
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  });
};

const fasterFib = fibCached();
console.log(fasterFib(8));
console.log(fasterFib(8));

const fibBottomUp = (n) => {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 1] + answer[i - 2]);
  }
  return answer.pop();
};

console.log("bottom up fib: ", fibBottomUp(5));
console.log("bottom up fib: ", fibBottomUp(8));
