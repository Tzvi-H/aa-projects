// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here
    // O(n)

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    //O(1)
    if (!this.head) return;
    const removedNode = this.head;
    this.length--;
    this.head = removedNode.next;
    return removedNode;
  }

  // O(n)
  removeFromTail() {
    let current = this.head;

    if (!current) return;

    this.length--;

    if (!current.next) {
      this.head = null;
      return current;
    }

    while (current.next.next) {
      current = current.next;
    }

    const removedNode = current.next;

    current.next = null;

    return removedNode;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here O(1)
    if (!this.head) return;
    return this.head.value;
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here O(n)
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
