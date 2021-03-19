const factorialRecursive = (num) => {
  console.log(num);
  if (num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
};

const factorialIterative = (num) => {
  let answer = 1;
  for (let i = 2; i <= num; i++) {
    answer = answer * i;
  }

  return answer;
};

console.log("iterative", factorialIterative(5));
console.log("recursive", factorialRecursive(5));
