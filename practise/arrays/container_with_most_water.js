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
      console.log({ x1: i, x2: p, y: yAxis });

      currArea = xAxis * yAxis;
      if (currArea > currMax) {
        currMax = currArea;
      }
      console.log("max:", currMax);
    }
  }
  return { currMax, xAxis, yAxis };
};
const heights = [1, 3, 6, 8, 9];
console.log("brute force solution: ", maxArea(heights));
