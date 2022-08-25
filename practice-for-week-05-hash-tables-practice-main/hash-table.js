const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
    this.capacity = numBuckets;
  }

  hash(key) {
    const sha256Value = sha256(key);
    const first8Chars = sha256Value.slice(0, 8);
    return parseInt(first8Chars, 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const pair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    if (this.data[index] !== null) {
      throw new Error("hash collision or same key/value pair already exists!");
    }
    this.data[index] = pair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    const pair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    if (this.data[index] !== null) {
      pair.next = this.data[index];
    }
    this.data[index] = pair;
    this.count++;
  }

  insert(key, value) {
    const pair = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (this.data[index] === null) {
      this.data[index] = pair;
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
      pair.next = this.data[index];
      this.data[index] = pair;
      this.count++;
    }
  }
}

module.exports = HashTable;
