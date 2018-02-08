class Heap {
  constructor() {
    this.storage = [];
  }
  insert(val) {
    this.storage.push(val);
    function reheapify(index, node) {
      const parentIdx = Math.ceil(index / 2 - 1);
      if (parentIdx < 0 || node.storage[index] <= node.storage[parentIdx]) {
        return `value added to index ${index}`;
      }
      const temp = node.storage[index];
      node.storage[index] = node.storage[parentIdx];
      node.storage[parentIdx] = temp;
      return reheapify(parentIdx, node);
    }
    return reheapify(this.storage.length - 1, this);
  }
  removeMax() {
    if (this.storage.length === 0) {
      return null;
    } else if (this.storage.length === 1) {
      return this.storage.pop();
    }
    const maxVal = this.storage[0];

    this.storage[0] = this.storage.pop();

    function reheapify(index, node) {
      let maxIdx = index;

      if (2 * index + 1 < node.storage.length && node.storage[2 * index + 1] > node.storage[index]) {
        maxIdx = 2 * index + 1;
      }

      if (maxIdx !== index) {
        node.storage[index] = node.storage[index] ^ node.storage[maxIdx];
        node.storage[maxIdx] = node.storage[index] ^ node.storage[maxIdx];
        node.storage[index] = node.storage[index] ^ node.storage[maxIdx];
        reheapify(maxIdx, node);
      }
    }
    reheapify(0, this);
    return maxVal;
  }
}

function heapSort(arr) {
  const heap = new Heap();
  arr.forEach(heap.insert.bind(heap));
  const result = [];
  while (heap.storage.length) {
    result.push(heap.removeMax());
  }
  return result.reduceRight((acc, val) => {
    acc.push(val);
    return acc;
  }, []);
}
