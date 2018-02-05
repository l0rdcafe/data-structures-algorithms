class SmallerThan {
  constructor() {
    this.storage = [];
  }
  add(value) {
    function isSmaller(val) {
      return val > value;
    }
    if (this.storage.length === 0 || this.storage.every(isSmaller)) {
      this.storage.push(value);
    } else {
      console.error("Cannot insert ", value);
    }
  }
}

const smaller = new SmallerThan();
smaller.add(2);
smaller.add(6);
smaller.add(1);
smaller.add(4);
smaller.add(5);
smaller.add(3);
smaller.add(9);
console.log(smaller);
