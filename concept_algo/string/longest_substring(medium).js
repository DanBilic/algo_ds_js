// sliding window technique
const testStr = "abcabcbb";
const lengthOfLongestSubstring = (s) => {
  let map = {};
  let max = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    for (let q = i; q < s.length; q++) {
      if (map[s[q]]) {
        map = {};
        result = 0;
        break;
      }

      result++;
      map[s[q]] = true;
      if (result > max) {
        max = result;
      }
    }
  }
  return max;
};

console.log("Longest substring without repeating characters brute force:");
console.log("input:", testStr);
console.log("result:", lengthOfLongestSubstring(testStr));
console.log("\n");
