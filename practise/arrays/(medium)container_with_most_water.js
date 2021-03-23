const maxArea = (heightsArr) => {
  const len = heightsArr.length;

  let currMax = 0;
  let currArea = 0;
  let xAxis = 0;
  let yAxis = 0;
  for (let i = 0; i < len; i++) {
    for (let p = i + 1; p < len; p++) {
      xAxis = p - i;
      yAxis = heightsArr[i] > heightsArr[p] ? heightsArr[p] : heightsArr[i];
      //   console.log({ x1: i, x2: p, y: yAxis });

      currArea = xAxis * yAxis;
      if (currArea > currMax) {
        currMax = currArea;
      }
      //   console.log("max:", currMax);
    }
  }
  return currMax;
};
const heights = [1, 3, 6, 8, 9];
console.log("brute force solution: ", maxArea(heights));

// OPTIMIZED SOLUTION
// shifting pointers optimization technique
const maxAreaOptimized = (heightsArr) => {
  let p1 = 0,
    p2 = heightsArr.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heightsArr[p1], heightsArr[p2]);
    const width = p2 - p1;
    console.log({ height, width });
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heightsArr[p1] <= heightsArr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

console.log("optimized solution: ", maxAreaOptimized(heights));
