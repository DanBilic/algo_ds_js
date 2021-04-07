function processData(input) {
  input = input.split("\n");
  //Enter your code here
  let stackAsStack = [],
    stackAsQueue = [];

  for (let i = 1; i <= input[0]; i++) {
    let operation = input[i].split(" ");

    // console.log("operation", operation)

    switch (operation[0]) {
      case "1":
        stackAsStack.push(parseInt(operation[1]));
        // console.log("operation", operation);
        // console.log("stackAsStack", stackAsStack);
        // console.log("stackAsQueue", stackAsQueue);

        break;
      case "2":
        if (stackAsQueue.length === 0) {
          while (stackAsStack.length) {
            stackAsQueue.push(stackAsStack.pop());
          }
        }
        stackAsQueue.pop();
        // console.log("operation", operation);
        // console.log("stackAsStack", stackAsStack);
        // console.log("stackAsQueue", stackAsQueue);
        break;
      case "3":
        // console.log("operation", operation);
        // console.log("stackAsStack", stackAsStack);
        // console.log("stackAsQueue", stackAsQueue);
        if (stackAsQueue.length === 0) {
          while (stackAsStack.length) {
            stackAsQueue.push(stackAsStack.pop());
          }
        }
        console.log(stackAsQueue[stackAsQueue.length - 1]);

        break;
    }
  }
}
