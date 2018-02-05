class SecondSmallest {
  constructor() {
    this.storage = [];
  }
  add(val) {
    this.storage.push(val);
  }
  findSmallest() {
    let smallest = this.storage[0];
    for (let i = 0; i < this.storage.length; i += 1) {
      if (this.storage[i] < smallest) {
        smallest = this.storage[i];
      }
    }
    return smallest;
  }
  findSecondSmallest() {
    let smallest = this.storage[0];
    let secondSmol;
    for (let i = 0; i < this.storage.length; i += 1) {
      if (this.storage[i] < smallest) {
        secondSmol = smallest;
        smallest = this.storage[i];
      } else if (this.storage[i] < secondSmol && this.storage[i] < smallest) {
        secondSmol = this.storage[i];
      }
    }
    return secondSmol;
  }
}

const list = new SecondSmallest();
list.add(2);
list.add(4);
list.add(-6);
list.add(4);
console.log(list.findSecondSmallest());
