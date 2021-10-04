console.log("reverse string:");

const STR = "automobil";

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log("[SOLUTION 1]:");
console.log(STR);
console.log(reverseString(STR));

const reverseString2 = (str) => {
  const splittedArr = str.split("");
  for (let i = 0; i < splittedArr.length / 2; i++) {
    const len = splittedArr.length - 1;
    const end = splittedArr[len - i];
    splittedArr[len - i] = splittedArr[i];
    splittedArr[i] = end;
  }
  return splittedArr.join("");
};

console.log("[SOLUTION 2]:");
console.log(STR);
console.log(reverseString2(STR));

const reverseString3 = (str) => {
  let reversed = "";
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
};

console.log("[SOLUTION 3]:");
console.log(STR);
console.log(reverseString3(STR));
