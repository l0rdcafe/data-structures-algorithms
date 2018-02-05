class RevSeqSearch {
  constructor() {
    this.storage = [];
  }
  add(val) {
    this.storage.push(val);
  }
  revFind(val) {
    for (let i = this.storage.length; i >= 0; i -= 1) {
      if (this.storage[i] === val) {
        return i;
      }
    }
    return -1;
  }
}

const revS = new RevSeqSearch();
revS.add(1);
revS.add(4);
revS.add(7);
revS.add(7);
revS.add(1);
revS.add(3);
console.log(revS.revFind(7));
