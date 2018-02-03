function swap(arr, i1, i2) {
  if (i1 === i2) {
    return;
  }
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function quickSort(array, lo = 0, hi = array.length - 1) {
  if (lo < hi) {
    const p = partition(array, lo, hi);
    quickSort(array, lo, p - 1);
    quickSort(array, p + 1, hi);
  }
  if (hi - lo === array.length - 1) {
    return array;
  }

  function partition(arr, first, last) {
    const pivot = arr[last];
    let pivotLoc = first;

    for (let i = first; i < last; i += 1) {
      if (arr[i] <= pivot) {
        swap(arr, pivotLoc, i);
        pivotLoc += 1;
      }
    }
    swap(arr, pivotLoc, last);
    return pivotLoc;
  }
}
