/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */
const fillStacks = (stack) => {
  let newStack = [];
  newStack.push(stack[stack.length - 1]);

  for (let i = 1; i < stack.length; i++) {
    newStack.push(stack[stack.length - 1 - i] + newStack[i - 1]);
  }
  return newStack;
};

function equalStacks(h1, h2, h3) {
  // Write your code here
  let result = 0;

  let h1C = fillStacks(h1),
    h2C = fillStacks(h2),
    h3C = fillStacks(h3);

  console.log("h1C", h1C);
  console.log("h2C", h2C);
  console.log("h3C", h3C);

  while (h1C.length > 0 || h2C.length > 0 || h3C.length > 0) {
    let h1peek = h1C[h1C.length - 1];
    let h2peek = h2C[h2C.length - 1];
    let h3peek = h3C[h3C.length - 1];

    if (h1peek === h2peek && h2peek === h3peek) {
      result = h1peek;
      break;
    }

    if (h1peek >= h2peek && h1peek >= h3peek) {
      h1C.pop();
    } else if (h2peek >= h1peek && h2peek >= h3peek) {
      h2C.pop();
    } else if (h3peek >= h2peek && h3peek >= h1peek) {
      h3C.pop();
    }
  }
  return result;
}
