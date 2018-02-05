class Words {
  constructor() {
    this.array = [];
  }
  addWord(value) {
    this.array.push(value);
  }
  displayForwards() {
    this.array.forEach(element => {
      console.log(element);
    });
  }
  displayBackwards() {
    for (let i = this.array.length - 1; i >= 0; i -= 1) {
      console.log(this.array[i]);
    }
  }
}

const words = new Words();
words.addWord("Love");
words.addWord("doesn't");
words.addWord("always");
words.addWord("garner");
words.addWord("hate");
words.displayBackwards();
words.displayForwards();
