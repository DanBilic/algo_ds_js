/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log("sortedIntervals", sortedIntervals);
  const result = [sortedIntervals[0]];
  console.log("result", result);

  for (let i = 1; i < sortedIntervals.length; i++) {
    const lastResult = result[result.length - 1];
    console.log("lastResult", lastResult);
    const a1 = lastResult[0];
    const a2 = lastResult[1];

    const b1 = sortedIntervals[i][0];
    const b2 = sortedIntervals[i][1];

    if (a2 >= b1) {
      lastResult[0] = a1;
      lastResult[1] = Math.max(a2, b2);
    } else {
      result.push(sortedIntervals[i]);
    }
  }

  return result;
};
