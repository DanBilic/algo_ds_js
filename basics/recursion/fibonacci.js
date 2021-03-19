// exponential time for recursive approach

const fibonacciRecursive = (num) => {
  if (num === 1) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }

  return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1);
};

// O(n) time
const fibonacciIterative = (num) => {
  let arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[num];
};

console.log("recursive: ", fibonacciRecursive(3));
console.log("iterative: ", fibonacciIterative(3));
