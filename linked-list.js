class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  forEach(cb) {
    let node = this.head;
    while (node) {
      cb(node.value);
      node = node.next;
    }
  }

  print() {
    const result = [];
    this.forEach(value => {
      result.push(value);
    });
    return result.join(", ");
  }

  insertAfter(node, value) {
    const oldNext = node.next;
    const newNext = new Node(value);

    node.next = newNext;
    newNext.next = oldNext;

    if (this.tail === node) {
      this.tail = newNext;
    }
    return newNext;
  }

  removeAfter(node) {
    const removedNode = node.next;
    if (!removedNode) {
      return "Nothing to remove";
    }

    const newNext = removedNode.next;

    node.next = newNext;
    removedNode.next = null;

    if (removedNode === this.tail) {
      this.tail = node;
    }
    return removedNode;
  }

  insertHead(value) {
    const newHead = new Node(value);
    const oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    return this.head;
  }

  removeHead() {
    const oldHead = this.head;
    const newHead = oldHead.next;
    this.head = newHead;
    oldHead.next = null;
    return oldHead;
  }

  findNode(value) {
    const node = this.head;
    while (node) {
      if (node.value === value) {
        return node;
      }
    }
    return `No node with value: ${value} found`;
  }

  appendToTail(value) {
    const newTail = new Node(value);

    this.tail.next = newTail;
    this.tail = newTail;

    return newTail;
  }
}
