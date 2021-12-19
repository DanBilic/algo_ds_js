// Given an array of integers sorted in ascending order, return the starting and ending index
// of a given target value in an array, i.e. [x,y]
// the solution should run in O(log n) time
// input array [1,2,3,3,5,5,5,6,9]

const inputArray = [1, 2, 3, 3, 5, 5, 5, 6, 9];

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundValue = array[mid];
    if (foundValue === target) {
      return mid;
    } else if (foundValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const findStartAndEndIndex = (array, target) => {
  const foundIndex = binarySearch(array, target);
  console.log("mid", foundIndex);
  if (foundIndex === -1) {
    return -1;
  }

  const leftArray = array.slice(0, foundIndex);
  console.log("leftArray", leftArray);
  let leftIndex = binarySearch(leftArray, target);
  console.log("mid", leftIndex);
  if (leftIndex === -1) {
    leftIndex = foundIndex;
  }

  const rightArray = array.slice(foundIndex + 1, array.length);
  console.log("rightArray", rightArray);
  let rightIndex = binarySearch(rightArray, target);
  console.log("mid", rightIndex);
  if (rightIndex === -1) {
    rightIndex = foundIndex;
  }
  return [leftIndex, rightIndex];
};

console.log("question ", findStartAndEndIndex(inputArray, 5));
