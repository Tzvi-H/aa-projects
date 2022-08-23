// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here -> O(1)

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here -> O(1)
    let newNode = new DoublyLinkedNode(val);
    if (this.length > 0) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here O(1)
    const oldHead = this.head;
    if (!oldHead) return;
    this.length--;
    this.head = oldHead.next;
    if (this.head) {
      this.head.prev = null;
    }
    return oldHead.value;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here - O(1)
    if (!this.tail) return;
    this.length--;
    const oldTail = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    }
    return oldTail.value;
  }

  peekAtHead() {
    // Return value of head node

    // Write your hypothesis on the time complexity of this method here -> O(1)
    if (!this.head) return;
    return this.head.value;
  }

  peekAtTail() {
    // Return value of tail node

    // Write your hypothesis on the time complexity of this method here -> O(1)
    if (!this.tail) return;
    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
