const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const getTrappedWater = (heights) => {
  let totalWater = 0;
  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }
    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxRight, maxLeft) - heights[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

console.log("input array: ", heights);
console.log("result: ", getTrappedWater(heights));
