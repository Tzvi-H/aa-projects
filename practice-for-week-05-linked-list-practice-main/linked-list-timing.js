const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const doublyLinkedList = new DoublyLinkedList();
console.time("doublyLinkedList");
for (let i = 0; i < 1000000; i++) {
  doublyLinkedList.addToHead(i);
}
console.timeEnd("doublyLinkedList");

const singlyLinkedList = new LinkedList();
console.time("singlyLinkedList");
for (let i = 0; i < 1000000; i++) {
  singlyLinkedList.addToHead(i);
}
console.timeEnd("singlyLinkedList");
