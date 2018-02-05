class LargerThan {
  constructor() {
    this.storage = [];
  }
  add(value) {
    function isLarger(val) {
      return val < value;
    }
    if (this.storage.length === 0 || this.storage.every(isLarger)) {
      this.storage.push(value);
    } else {
      console.error("Cannot insert", value);
    }
  }
}

const larger = new LargerThan();
larger.add(2);
larger.add(6);
larger.add(1);
larger.add(4);
larger.add(5);
larger.add(3);
larger.add(9);
console.log(larger);
