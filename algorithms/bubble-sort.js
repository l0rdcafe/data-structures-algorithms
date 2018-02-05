function swap(arr, i1, i2) {
  if (i1 === i2) {
    return;
  }
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

const bubbleSort = function(array) {
  let wall = array.length;

  while (wall >= 0) {
    for (let i = 0; i < wall; i += 1) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i, i + 1);
      }
    }
    wall -= 1;
  }
  return array;
};
