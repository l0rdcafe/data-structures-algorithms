class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(val) {
    if (this.index < 10) {
      const i = this.index;
      this.storage[i] = val;
      this.index += 1;
    } else {
      console.log("Max capacity reached. Remove element before adding a new one.");
    }
  }

  pop() {
    const lastIndex = this.index - 1;
    delete this.storage[lastIndex];
    this.index -= 1;

    if (this.index < 0) {
      this.index = 0;
    }

    return this.storage[lastIndex];
  }
  count() {
    return this.index;
  }

  peek() {
    const lastIndex = this.index - 1;
    return this.storage[lastIndex];
  }
  contains(val) {
    for (let i = 0; i < this.count; i += 1) {
      if (this.storage[i] === val) {
        return true;
      }
      return false;
    }
  }
}

class MinStack {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = {};
    this.count = 0;
    this.min = new Stack();
  }
  push(value) {
    if (this.count < this.capacity) {
      if (this.min.peek() < value) {
        this.min.push(this.min.peek());
      } else {
        this.min.push(value);
      }
      this.storage[this.count] = value;
      this.count += 1;
      return this.count;
    }
    return "Max capacity reached.";
  }
  pop() {
    this.min.pop();
    this.count -= 1;
    const value = this.storage[this.count];
    delete this.storage[this.count];
    if (this.count < 0) {
      this.count = 0;
    }
    return value;
  }
  peek() {
    return this.storage[this.count - 1];
  }
  count() {
    return this.count;
  }
  min() {
    return this.min.peek();
  }
}
