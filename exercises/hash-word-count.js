class HashWordCount {
  constructor() {
    this.storage = [];
    this.size = 10;
  }
  hashingFunc(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash += str.charCodeAt(i) * (i + 1);
    }
    return hash % this.size;
  }
  addStr(str) {
    str.split(" ").forEach(function(word) {
      const index = this.hashingFunc(word, this.size);
      if (this.storage[index] !== undefined && this.storage[index].count >= 0) {
        this.storage[index].count += 1;
      } else {
        this.storage[index] = { count: 1, word };
      }
    }, this);
  }
}

const words = new HashWordCount();
words.addStr("the brown fox jumped over the blue fox");
console.log(words);
