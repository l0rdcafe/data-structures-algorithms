class CharStore {
  constructor() {
    this.array = [];
  }
  add(char) {
    this.array.push(char);
  }
  displayAsSingleWord() {
    return this.array.join("");
  }
}

const store = new CharStore();
store.add("x");
store.add("2");
store.add("4");
store.add("g");
store.add("u");
store.add("d");
store.add("f");
store.add("6");
store.add("b");
store.add("a");
console.log(store.displayAsSingleWord());
