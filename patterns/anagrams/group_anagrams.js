// BUTE FORCE SOLUTION

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const map = {};

var groupAnagrams = function (strs) {
  const results = [];
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const result = [];
    const originalStr = strs[i];
    const goalStr = strs[i].split("").sort().join("");
    if (map[goalStr]) {
      continue;
    }
    console.log(goalStr);
    result.push(originalStr);

    for (let j = i + 1; j < strs.length; j++) {
      const originalStr = strs[j];
      const compareStr = strs[j].split("").sort().join("");
      if (compareStr === goalStr) {
        result.push(originalStr);
      }
    }

    map[goalStr] = true;
    results.push(result);
  }

  return results;
};
