class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const item = this.currentRoom.getItemByName(itemName);
    const index = this.currentRoom.items.indexOf(item);
    this.items.push(item);
    this.currentRoom.items.splice(index, 1);
  }

  dropItem(itemName) {
    const item = this.getItemByName(itemName);
    const index = this.items.indexOf(item);
    this.currentRoom.items.push(item);
    this.items.splice(index, 1);
  }

  eatItem(itemName) {
    const item = this.items.find((i) => i.name === itemName);
    if (item.constructor.name === "Food") {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }

  getItemByName(name) {
    return this.items.find((i) => i.name === name);
  }
}

module.exports = {
  Player,
};
