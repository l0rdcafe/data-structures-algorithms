class WordCount {
  constructor() {
    this.storage = {};
  }
  addString(string) {
    string.split(" ").forEach(function(word) {
      if (this.storage[word] >= 0) {
        this.storage[word] += 1;
      } else {
        this.storage[word] = 1;
      }
    }, this);
  }
}

const words = new WordCount();
words.addString("the brown fox jumped over the blue fox");
console.log(words);
