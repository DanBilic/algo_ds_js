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

// O(n x m) -> optimal solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const map = {};

var groupAnagrams = function (strs) {
  const cache = {};
  const normalizeCharNum = "a".charCodeAt();
  // multiplying primes form a unique number
  var primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  for (let i = 0; i < strs.length; i++) {
    const currentStr = strs[i];
    const key = currentStr.split("").reduce((total, char) => {
      return total * primes[char.charCodeAt() - normalizeCharNum];
    }, 1);

    !cache[key] ? (cache[key] = [currentStr]) : cache[key].push(currentStr);
  }

  return Object.values(cache);
};
