/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMax(operations) {
  // Write your code here

  let stack = [];
  let answers = [];

  console.log(operations);
  for (let i = 0; i < operations.length; i++) {
    console.log("stack", stack);
    let operation = operations[i].split(" ");

    switch (operation[0]) {
      case "1":
        stack.push(parseInt(operation[1]));
        break;

      case "2":
        stack.pop();
        break;

      case "3":
        answers.push(Math.max(...stack));
        break;
    }
  }

  return answers;
}

// optimized -> still some errors
/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMaxOptimized(operations) {
  // Write your code here

  let stack = [];
  let answers = [],
    max = 0;

  console.log(operations);
  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i].split(" ");
    console.log("stack", stack);
    switch (operation[0]) {
      case "1":
        max = Math.max(max, parseInt(operation[1]));
        stack.push({ val: parseInt(operation[1]), max: max });

        break;

      case "2":
        let popedElement = stack.pop();

        if (popedElement) {
          if (stack > 0) {
            max = stack[stack.length - 1].max;
          } else {
            max = 0;
          }
        }
        break;

      case "3":
        if (stack.length > 0) {
          let lastElement = stack[stack.length - 1];
          answers.push(lastElement.max);
          break;
        }
    }
  }
  console.log("answers", answers);
  return answers;
}

// optimization with 2 stacks -> no errors
/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMaxWith2Stacks(operations) {
  // Write your code here

  let stack = [];
  let answers = [],
    maxStack = [];

  console.log(operations);
  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i].split(" ");

    switch (operation[0]) {
      case "1":
        let item = parseInt(operation[1]);
        stack.push(item);

        if (maxStack.length > 0) {
          if (item < maxStack[maxStack.length - 1]) {
            maxStack.push(maxStack[maxStack.length - 1]);
          } else {
            maxStack.push(item);
          }
        } else {
          maxStack.push(item);
        }
        console.log("stack", stack);
        console.log("max stack", maxStack);
        break;

      case "2":
        stack.pop();
        maxStack.pop();
        console.log("stack", stack);
        console.log("max stack", maxStack);
        break;

      case "3":
        if (stack.length > 0) {
          answers.push(maxStack[maxStack.length - 1]);
          break;
        }
    }
  }
  console.log("answers", answers);
  return answers;
}
