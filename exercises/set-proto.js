class SetProto {
  constructor() {
    this.storage = [];
  }
  add(val) {
    if (this.storage.indexOf(val) < 0) {
      this.storage.push(val);
      return true;
    }
    return false;
  }
  remove(val) {
    const pos = this.storage.indexOf(val);
    if (pos > -1) {
      this.storage.splice(pos, 1);
      return true;
    }
    return false;
  }
  show() {
    return this.storage;
  }
  contains(val) {
    if (this.storage.indexOf(val) > -1) {
      return true;
    }
    return false;
  }
  union(set) {
    const tempset = new SetProto();
    for (let i = 0; i < this.storage.length; i += 1) {
      tempset.add(this.storage[i]);
    }
    for (let i = 0; i < set.storage.length; i += 1) {
      if (!tempset.contains(set.storage[i])) {
        tempset.storage.push(set.storage[i]);
      }
    }
    return tempset;
  }
  intersect(set) {
    const tempset = new SetProto();
    for (let i = 0; i < this.storage.length; i += 1) {
      if (set.contains(this.storage[i])) {
        tempset.add(this.storage[i]);
      }
    }
    return tempset;
  }
  size() {
    return this.storage.length;
  }
  subset(set) {
    if (this.size() > set.size()) {
      return false;
    }
    this.storage.forEach(member => {
      if (!set.contains(member)) {
        return false;
      }
    });
    return true;
  }
}

const cis = new SetProto();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
const dmp = new SetProto();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
let it = new SetProto();
it = cis.subset(dmp);
console.log(it);
