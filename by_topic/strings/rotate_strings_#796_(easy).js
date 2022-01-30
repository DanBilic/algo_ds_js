/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (goal.length != s.length) return false;

  const allRotationsString = s + s;

  return allRotationsString.includes(goal);
};
