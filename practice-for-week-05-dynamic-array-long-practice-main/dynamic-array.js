class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    const element = this.data[this.length - 1];
    this.length--;
    return element;
  }

  shift() {
    const element = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.length--;
    return element;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    let temp = new Array(this.capacity * 2);
    for (let i = 0; i < this.length; i++) {
      temp[i] = this.read(i);
    }
    this.data = temp;
    this.capacity *= 2;
  }
}

module.exports = DynamicArray;
