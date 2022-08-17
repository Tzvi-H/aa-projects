class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, ${this.name}!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj) {
    if (!(obj instanceof Person)) {
      throw new TypeError("argument is not a valid Person object");
    } else if (!obj.name || !obj.age) {
      throw new TypeError("argument is missing age or name property");
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll(persons) {
    return persons.map((p) => p.sayHello());
  }
}

module.exports = Person;
