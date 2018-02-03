function merge(left, right) {
  let result = [];
  let iLeft = 0;
  let iRight = 0;

  while (result.length < left.length + right.length) {
    if (iLeft === left.length) {
      result = result.concat(right.slice(iRight));
    } else if (iRight === right.length) {
      result = result.concat(left.slice(iLeft));
    } else if (left[iLeft] <= right[iRight]) {
      result.push(left[iLeft]);
      iLeft += 1;
    } else {
      result.push(right[iRight]);
      iRight += 1;
    }
  }
  return result;
}

function mergeSortRecursive(array) {
  if (array.length <= 1) {
    return array;
  }
  const left = array.slice(0, array.length / 2);
  const right = array.slice(array.length / 2);
  const leftSorted = mergeSortRecursive(left);
  const rightSorted = mergeSortRecursive(right);

  return merge(leftSorted, rightSorted);
}

function mergeSortIterative(array) {
  let splitArr = array.map(element => [element]);

  while (splitArr.length > 1) {
    const result = [];

    for (let i = 0; i < splitArr.length; i += 2) {
      if (splitArr[i + 1]) {
        result.push(merge(splitArr[i], splitArr[i + 1]));
      } else {
        result.push(splitArr[i]);
      }
    }
    splitArr = result;
  }
  return splitArr[0];
}
