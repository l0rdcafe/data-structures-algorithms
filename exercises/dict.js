class Dict {
  constructor() {
    this.storage = {};
  }
  addNum(name, number) {
    this.storage[name] = number;
  }
  removeNum(name) {
    delete this.storage[name];
  }
  findNum(name) {
    return this.storage[name];
  }
  showAll() {
    Object.keys(this.storage).forEach(function(key) {
      console.log(key, this.storage[key]);
    }, this);
  }
  clear() {
    this.storage = {};
  }
}

const nums = new Dict();
nums.addNum("mohamed", "0239480924");
nums.addNum("laila", "2343253");
nums.addNum("alaa", "098045343");
nums.addNum("wael", "1231243546");
nums.showAll();
nums.removeNum("mohamed");
nums.showAll();
console.log(nums.findNum("laila"));
nums.showAll();
nums.clear();
