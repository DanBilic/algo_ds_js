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

// O(m x n log n) Solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const map = {};

var groupAnagrams = function (strs) {
  const cache = {};

  for (let i = 0; i < strs.length; i++) {
    const currentStr = strs[i];
    const sortedCurrentStr = currentStr.split("").sort().join("");

    if (cache[sortedCurrentStr]) {
      cache[sortedCurrentStr].push(currentStr);
    } else {
      cache[sortedCurrentStr] = [];
      cache[sortedCurrentStr].push(currentStr);
    }
  }

  return Object.values(cache);
};
