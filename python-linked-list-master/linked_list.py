"""
============================================================================
Implementation Exercise: Singly Linked List
============================================================================

-------
Phase 1:
-------
1. Node and LinkedList initialization
2. Getting a node by its position
3. Adding a node to the list's tail
4. Adding a node to list's head
5. Removing the head node
6. Removing the tail node
7. Returning the list length

-------
Phase 2:
-------

1. Check whether the list contains_value a value
2. Inserting a node value into the list at a specific position
3. Updating a list node's value at a specific position
4. Removing a node value from the list at a specific position
5. Format the list as a string whenever `print()` is invoked
"""

# Phase 1

# TODO: Implement a Linked List Node class here
class Node:
  # TODO: Set the `_value` `_next` node instance variables
  def __init__(self, value):
    self._value = value
    self._next = None


# TODO: Implement a Singly Linked List class here
class LinkedList:
  # TODO: Set the `_head` node, `_tail` node, and list `_length` instance variables
  def __init__(self):
    self._head = None
    self._tail = None
    self._length = 0

  # TODO: Implement the get_node method here
  def get_node(self, position):
    current_node = self._head
    current_position = 0

    while current_position < self._length and current_position < position:
      current_node = current_node._next
      current_position += 1

    if current_node:
      return current_node

  # TODO: Implement the add_to_tail method here
  def add_to_tail(self, value):
    new_node = Node(value)
    if self._head is None:
      self._head = new_node
    else:
      self._tail._next = new_node
    self._tail = new_node
    self._length += 1
    return self

  # TODO: Implement the add_to_head method here
  def add_to_head(self, value):
    new_node = Node(value)
    if self._tail == None:
      self._tail = new_node
    else:
      new_node._next = self._head
    self._head = new_node
    self._length += 1
    return self

  # TODO: Implement the remove_head method here
  def remove_head(self):
    if self._length == 0:
      return None

    removed_node = self._head

    self._head = removed_node._next
    self._length -= 1

    if self._length == 0:
      self._tail = None

    return removed_node

  # TODO: Implement the remove_tail method here
  def remove_tail(self):
    if self._length == 0:
      return None

    self._length -= 1
    removed_node = self._tail

    if self._head == self._tail:
      self._head = None
      self._tail = None
    else:
      current_node = self._head
      while current_node._next._next:
        current_node = current_node._next
      current_node._next = current_node._next._next
      self._tail = current_node

    return removed_node

  # TODO: Implement the __len__ method here
  def __len__(self):
    return self._length

# Phase 2

  # TODO: Implement the contains_value method here
  def contains_value(self, target):
    current_node = self._head
    while current_node:
      if current_node._value == target:
        return True
      else:
        current_node = current_node._next

    return False

  # TODO: Implement the insert_value method here
  def insert_value(self, position, value):
    if position > self._length:
      return False

    if position == 0:
      self.add_to_head(value)
      return True
    elif position == self._length:
      self.add_to_tail(value)
      return True
    else:
      current_node = self._head
      current_index = 0
      while current_index < position - 1:
        current_index += 1
        current_node = current_node._next
      new_node = Node(value)
      new_node._next = current_node._next
      current_node._next = new_node

    self._length += 1
    return True

  # TODO: Implement the update_value method here
  def update_value(self, position, value):
    node = self.get_node(position)

    if not node:
      return False

    node._value = value
    return True

  # TODO: Implement the remove_node method here
  def remove_node(self, position):
    if position > self._length:
      return False

    if position == 0:
      self.remove_head()
      return True
    elif position == self._length:
      self.remove_tail()
      return True
    else:
      current_node = self._head
      current_index = 0
      while current_index < position - 1:
        current_index += 1
        current_node = current_node._next
      current_node._next = current_node._next._next

    self._length -= 1
    return True

  # TODO: Implement the __str__ method here
  def __str__(self):
    current_node = self._head

    if not current_node:
      return 'Empty List'

    values_string = []

    while current_node:
      values_string.append(current_node._value)
      current_node = current_node._next

    return ", ".join(values_string)



# Phase 2 Manual Testing

# # 1. Test whether the list contains_value a value
linked_list = LinkedList()
linked_list.add_to_head('new head node')
# print(linked_list.contains_value('new head node'))      # True
# print(linked_list.contains_value('App Academy node'))   # False

# # 2. Test inserting a node value into the list at a specific position
linked_list.insert_value(0, 'hello!')
# print(linked_list.get_node(0)._value)                   # `hello!`

# # 3. Test updating a list node's value at a specific position
linked_list.update_value(0, 'goodbye!')

# print(linked_list.get_node(0)._value)                   # `goodbye!`

# # 4. Test removing a node value from the list at a specific position
# print(linked_list.get_node(1)._value)                   # `new head node`
linked_list.remove_node(1)
# print(linked_list.get_node(1))                          # None

# # 5. Format the list as a string whenever `print()` is invoked
new_linked_list = LinkedList()
print(new_linked_list)                  # Empty List
new_linked_list.add_to_tail('puppies')
print(new_linked_list)                  # puppies
new_linked_list.add_to_tail('kittens')
print(new_linked_list)                  # puppies, kittens


# Phase 1 Manual Testing:

# 1. Test Node and LinkedList initialization
# node = Node('hello')
# print(node)                                     # <__main__.Node object at ...>
# print(node._value)                              # hello
# linked_list = LinkedList()
# print(linked_list)                              # <__main__.LinkedList object at ...>

# # 2. Test getting a node by its position
# print(linked_list.get_node(0))                # None

# # 3. Test adding a node to the list's tail
# linked_list.add_to_tail('new tail node')
# print(linked_list.get_node(0))                # <__main__.Node object at ...>
# print(linked_list.get_node(0)._value)         # `new tail node`

# # 4. Test adding a node to list's head
# linked_list.add_to_head('new head node')
# print(linked_list.get_node(0))                # <__main__.Node object at ...>
# print(linked_list.get_node(0)._value)         # `new head node`

# # 5. Test removing the head node
# linked_list.remove_head()
# print(linked_list.get_node(0)._value)         # `new tail node` because `new head node` has been removed
# print(linked_list.get_node(1))                # `None` because `new head node` has been removed

# # 6. Test removing the tail node
# print(linked_list.get_node(0)._value)         # `new tail node`
# linked_list.remove_tail()
# print(linked_list.get_node(0))                # None

# # 7. Test returning the list length
# print(len(linked_list))                                 # 2
