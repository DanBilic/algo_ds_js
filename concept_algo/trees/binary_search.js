const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundValue = array[mid];
    if (foundValue === target) {
      // return index
      return mid;
    } else if (foundValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Binary search: \n");
console.log("input array: ", sortedArray);
console.log("target: 3");
console.log("result: ", binarySearch(sortedArray, 3));
console.log("complexity Time: O(log n) - Space: O(1)");
