class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } else if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
    return this;
  }
  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (value < this.value) {
      return !!this.left && this.left.contains(value);
    }

    if (value > this.value) {
      return !!this.right && this.right.contains(value);
    }
    return false;
  }
  traverseDepthFirstInOrder(fn) {
    if (!this.left && !this.right) {
      return fn(this);
    }
    if (this.left) {
      this.left.traverseDepthFirstInOrder(fn);
    }
    fn(this);
    if (this.right) {
      this.right.traverseDepthFirstInOrder(fn);
    }
  }
  traverseDepthFirstPreOrder(fn) {
    fn(this);
    if (this.left) {
      this.left.traverseDepthFirstPreOrder(fn);
    }
    if (this.right) {
      this.right.traverseDepthFirstPreOrder(fn);
    }
  }
  traverseDepthFirstPostOrder(fn) {
    if (this.left) {
      this.left.traverseDepthFirstPostOrder(fn);
    }
    if (this.right) {
      this.right.traverseDepthFirstPostOrder(fn);
    }
    fn(this);
  }
  traverseBreadthFirst(fn) {
    const queue = [this];
    while (queue.length) {
      const node = queue.shift();
      fn(node);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  checkIfFull() {
    let result = true;
    this.traverseBreadthFirst(node => {
      if (!node.left && node.right) {
        result = false;
      } else if (node.left && !node.right) {
        result = false;
      }
    });
    return result;
  }
  checkIfBalanced() {
    const heights = [];
    const recurse = function(node, height) {
      if (!node.left && !node.right) {
        return heights.push(height);
        node.left && recurse(node.left, height + 1);
        node.right && recurse(node.right, height + 1);
      }
    };
    recurse(this, 1);
    const min = Math.min.apply(null, heights);
    const max = Math.max.apply(null, heights);
    return max - min <= 1;
  }
}
