const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // set current index as minimum
    let min = i;
    let tmp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return arr;
};

const nums = [1, 5, 8, 3, 6, 7, 2];
console.log(selectionSort(nums));
