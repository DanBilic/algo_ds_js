const s1 = "ad#c";
const s2 = "ad#c";

const buildString = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      result.pop();
    } else {
      result.push(str[i]);
    }
  }
  return result;
};

var backspaceCompare = function (s, t) {
  const sStr = buildString(s);
  const tStr = buildString(t);

  if (sStr.length !== tStr.length) {
    return false;
  } else {
    for (let i = 0; i < sStr.length; i++) {
      if (sStr[i] !== tStr[i]) {
        return false;
      }
    }
  }

  return true;
};

console.log("Backspace string compare:");
console.log("input 1", s1);
console.log("input 2", s2);
console.log("result", backspaceCompare(s1, s2));
console.log("\n");
