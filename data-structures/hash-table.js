class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = [];
    this.count = 0;
    this.hashingFunction = function(str, tableSize) {
      let hash = 0;
      for (let i = 0; i < str.length; i += 1) {
        hash += str.charCodeAt(i) * (i + 1);
      }
      return hash % tableSize;
    };
  }
  find(key) {
    const hash = this.hashingFunction(key, this.size);
    this.storage[hash] = this.storage[hash] || [];
    const bucket = this.storage[hash];
    let match;
    let matchIndex;
    bucket.forEach((item, index) => {
      if (item.hasOwnProperty(key)) {
        match = item;
        matchIndex = index;
      }
    });
    return {
      match,
      bucket,
      matchIndex
    };
  }
  resize(newSize) {
    const oldStorage = this.storage;
    this.size = newSize;
    this.count = 0;
    this.storage = [];
    oldStorage.forEach(function(bucket) {
      bucket.forEach(function(item) {
        const key = Object.keys(item)[0];
        this.set(key, item[key]);
      }, this);
    }, this);
  }
  set(key, value) {
    const { match, bucket } = this.find(key);

    if (match) {
      match[key] = value;
    } else {
      const newItem = {};
      newItem[key] = value;
      this.count += 1;
      bucket.push(newItem);
      if (this.count > 0.75 * this.size) {
        this.resize(2 * this.size);
      }
    }
    return this;
  }
  get(key) {
    const { match } = this.find(key);
    return match && match[key];
  }
  has(key) {
    return !!this.find(key).match;
  }
  delete(key) {
    const { match } = this.find(key);
    if (match) {
      const { bucket } = this.find(key);
      const { matchIndex } = this.find(key);
      bucket.splice(matchIndex, 1);
      this.count -= 1;
      if (this.count < 0.25 * this.size) {
        this.resize(0.5 * this.size);
      }
    }
    return !!match;
  }
  forEach(cb) {
    this.storage.forEach(bucket => {
      bucket = bucket || [];
      bucket.forEach(item => {
        cb(item);
      });
    });
  }
}
