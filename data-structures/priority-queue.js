class PriorityQueue {
  constructor() {
    this.storage = [];
  }
  enqueue(val) {
    if (this.isEmpty()) {
      this.storage.push(val);
    } else {
      let added = false;
      for (let i = 0; i < this.storage.length; i += 1) {
        if (val[1] < this.storage[i][1]) {
          this.storage.splice(i, 0, val);
          added = true;
          break;
        }
      }
      if (!added) {
        this.storage.push(val);
      }
    }
  }
  dequeue() {
    const value = this.storage.shift();
    return value[0];
  }
  front() {
    return this.storage[0];
  }
  size() {
    return this.storage.length;
  }
  isEmpty() {
    return this.storage.length === 0;
  }
}
