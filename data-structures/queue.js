class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(val) {
    if (this.tail < 10) {
      this.storage[this.tail] = val;
      this.tail += 1;
      return this.count();
    }
    return "Max capacity reached. Remove element before adding a new one.";
  }
  dequeue() {
    const firstItem = this.storage[this.head];
    delete this.storage[this.head];
    if (this.head < this.tail) {
      this.head += 1;
    }
    return firstItem;
  }
  count() {
    return this.tail - this.head;
  }
  peek() {
    return this.storage[this.head];
  }
  contains(val) {
    for (let i = this.head; i < this.tail; i += 1) {
      if (this.storage[i] === val) {
        return true;
      }
    }
    return false;
  }
  until(value) {
    for (let i = this.head; i < this.tail; i += 1) {
      if (this.storage[i] === value) {
        return i - this.head + 1;
      }
    }
    return null;
  }
}
