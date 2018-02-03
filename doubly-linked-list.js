class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
  }

  forEach(cb) {
    const node = this.head;
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
    return result;
  }

  insertAfter(node, value) {
    const oldNext = node.next;
    const newNext = new DoublyNode(value);

    node.next = newNext;
    newNext.prev = node;
    newNext.next = oldNext;

    oldNext && (oldNext.prev = newNext);

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
    newNext.prev = node;

    removedNode.next = null;
    removedNode.prev = null;

    if (removedNode === this.tail) {
      this.tail = node;
    }
    return removedNode;
  }

  insertHead(value) {
    const newHead = new DoublyNode(value);
    const oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    oldHead.prev = newHead;
    return this.head;
  }

  removeHead() {
    const oldHead = this.head;
    const newHead = oldHead.next;
    this.head = newHead;
    newHead.prev = null;
    oldHead.next = null;
    return oldHead;
  }

  findNode(value) {
    const node = this.head;
    while (node) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
    return `No value with value: ${value} found`;
  }

  appendToTail(value) {
    const newTail = new DoublyNode(value);

    const oldTail = this.tail;
    oldTail.next = newTail;
    newTail.prev = oldTail;
    this.tail = newTail;
    return newTail;
  }

  insertBefore(node, value) {
    const oldPrev = node.prev;
    const newPrev = new DoublyNode(value);

    node.prev = newPrev;
    newPrev.next = node;
    newPrev.prev = oldPrev;
    oldPrev.next = newPrev;

    if (node === this.head) {
      this.head = newPrev;
    }

    return newPrev;
  }

  removeBefore(node) {
    const removedNode = node.prev;

    if (!removedNode) {
      return "Nothing to remove";
    }

    const newPrev = removedNode.prev;

    if (!newPrev) {
      this.head = node;
    }

    newPrev && (newPrev.next = node);
    node.prev = newPrev;

    removedNode.next = null;
    removedNode.prev = null;

    return removedNode;
  }
}
