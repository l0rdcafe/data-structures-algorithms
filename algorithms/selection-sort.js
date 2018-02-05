function swap(arr, i1, i2) {
  if (i1 === i2) {
    return;
  }
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function comparator(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

const selectionSort = function(array) {
  array.forEach((element, index) => {
    let minVal = element;
    let minIndex = index;
    for (let i = index; i < array.length; i += 1) {
      if (comparator(array[i], minVal) < 0) {
        minVal = array[i];
        minIndex = i;
      }
    }
    array = swap(array, index, minIndex);
  });
  return array;
};
