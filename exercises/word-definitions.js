class WordDefs {
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
  addDef(word, def) {
    const index = this.hashingFunc(word, this.size);
    this.storage[index] = def;
  }
  getDef(word) {
    const index = this.hashingFunc(word, this.size);
    return this.storage[index];
  }
}

const defs = new WordDefs();
defs.addDef("leila", "hamra");
defs.addDef("kabab", "kofta");
console.log(defs);
console.log(defs.getDef("kabab"));
console.log(defs.getDef("leila"));
