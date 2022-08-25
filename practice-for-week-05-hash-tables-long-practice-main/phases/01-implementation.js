class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    if (this.count / this.capacity >= 0.7) {
      this.resize();
    }
    const index = this.hashMod(key);

    if (this.data[index] === null) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
      return;
    }

    let current = this.data[index];
    while (current && current.key !== key) {
      current = current.next;
    }

    if (current) {
      current.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);
      newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
    }
  }

  read(key) {
    const index = this.hashMod(key);
    let current = this.data[index];

    while (current && current.key !== key) {
      current = current.next;
    }

    return current ? current.value : undefined;
  }

  resize() {
    const oldData = this.data.filter((e) => e !== null);
    this.capacity *= 2;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
    oldData.forEach((pair) => {
      this.insert(pair.key, pair.value);
      while (pair.next) {
        pair = pair.next;
        this.insert(pair.key, pair.value);
      }
    });
  }

  delete(key) {
    const index = this.hashMod(key);
    let currentPair = this.data[index];

    if (!currentPair) {
      return "Key not found";
    }

    if (currentPair.key === key) {
      this.data[index] = currentPair.next;
      this.count--;
      return;
    }

    while (currentPair.next && currentPair.next.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair.next) {
      this.count--;
      currentPair.next = currentPair.next.next;
      return;
    } else {
      return "Key not found";
    }
  }
}

module.exports = HashTable;
