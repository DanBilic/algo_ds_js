// Complete the superReducedString function below.

// using stack
function superReducedString(s) {
  let result = [];
  result.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === result[result.length - 1]) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }
  if (result.length === 0) {
    result = "Empty String";
  } else {
    result = result.join("");
  }
  return result;
}
