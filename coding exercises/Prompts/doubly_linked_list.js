// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // TC - O(1), SC - O(1)
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    this.insertBefore(this.head, node);
  }

  // TC - O(1), SC - O(1)
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
    }
    this.insertAfter(this.tail, node);
  }

  // TC - O(1), SC - O(1)
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert == this.head && nodeToInsert == this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev != null) node.prev.next = nodeToInsert;
    else this.head = nodeToInsert;

    node.prev = nodeToInsert;
  }

  // TC - O(1), SC - O(1)
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert == this.head && nodeToInsert == this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next != null) {
      node.next.prev = nodeToInsert;
    } else this.tail = nodeToInsert;
    node.next = nodeToInsert;
  }

  // TC - O(n), SC - O(1)
  insertAtPosition(position, nodeToInsert) {
    if (position == 1) {
      this.setHead(nodeToInsert);
      return;
    }
    var currPosition = 1;
    var node = this.head;
    while (currPosition != position) {
      node = node.next;
      currPosition++;
    }
    this.insertBefore(node, nodeToInsert);
  }

  // TC - O(n), SC - O(1)
  removeNodesWithValue(value) {
    var node = this.head;
    while (node) {
      const tempNode = node;
      node = node.next;
      if (tempNode.value == value) {
        this.remove(tempNode);
      }
    }
  }

  // TC = O(1), SC - O(1)
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;

    node.next = null;
    node.prev = null;
  }
  // TC - O(n), SC - O(1)
  containsNodeWithValue(value) {
    var node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }

    return false;
  }
}
