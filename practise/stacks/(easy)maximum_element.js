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
