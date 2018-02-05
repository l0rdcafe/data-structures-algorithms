class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
    return child;
  }
  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i += 1) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
  }
  traverseDepthFirst(fn) {
    this.children.forEach(child => {
      child.traverseDepthFirst(fn);
    });
    fn(this);
  }
  traverseBreadthFirst(fn) {
    const queue = [this];
    while (queue.length) {
      const node = queue.shift();
      fn(node.value);
      node.children.forEach(child => {
        queue.push(child);
      });
    }
  }
}
