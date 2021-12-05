// two pointer technique

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

const backspaceCompareOptimal = (s, t) => {
  let pS = s.length - 1;
  let counterS = 0;
  let pT = t.length - 1;
  let counterT;

  while (pS >= 0 || pT >= 0) {
    if (s[pS] === "#" || t[pT] === "#") {
      if (s[pS] === "#") {
        let count = 2;
        while (count > 0) {
          count--;
          pS--;
          if (s[pS] === "#") {
            count += 2;
          }
        }
      }
      if (t[pT] === "#") {
        let count = 2;
        while (count > 0) {
          count--;
          pT--;
          if (t[pT] === "#") {
            count += 2;
          }
        }
      }
    } else {
      if (s[pS] !== t[pT]) {
        return false;
      }
      pS--;
      pT--;
    }
  }
  return true;
};

console.log("Backspace string compare optimal:");
console.log("input 1", s1);
console.log("input 2", s2);
console.log("result", backspaceCompareOptimal(s1, s2));
console.log("\n");
