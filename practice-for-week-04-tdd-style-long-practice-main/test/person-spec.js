const Person = require("../problems/person");
const { expect } = require("chai");

describe("Person", () => {
  let person1;

  beforeEach(() => {
    person1 = new Person("first last", 30);
  });

  it("will create name and age properties", () => {
    expect(person1.name).to.equal("first last");
    expect(person1.age).to.equal(30);
  });

  it("sayHello() instance method returns a greeting which includes the person's name", () => {
    expect(person1.sayHello()).to.equal("Hello, first last!");
  });

  it("visit(otherPerson) will return a string stating that this instance visited the passed-in person instance", () => {
    const person2 = new Person("other person");
    expect(person1.visit(person2)).to.equal("first last visited other person");
  });

  it("switchVisit(otherPerson) instance method - will invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument", () => {
    const person2 = new Person("other person");
    expect(person1.switchVisit(person2)).to.equal(
      "other person visited first last"
    );
  });

  describe("update(obj)", () => {
    it("will throw a TypeError if the argument is not a valid object", () => {
      expect(() => person1.update({ name: "john", age: 33 })).to.throw(
        TypeError,
        "argument is not a valid Person object"
      );
    });

    it("will throw a TypeError if the argument is missing an age or name property", () => {
      const person2 = new Person("other person");

      expect(() => person1.update(person2)).to.throw(
        TypeError,
        "argument is missing age or name property"
      );
    });

    it("If the incoming argument is an object then the instance's properties should be updated to match the passed-in object's values", () => {
      const person2 = new Person("other person", 19);
      person1.update(person2);
      expect(person1.name).to.equal("other person");
      expect(person1.age).to.equal(19);
    });
  });

  describe("tryUpdate(obj)", () => {
    it("will return true if calling update(obj) was successful", () => {
      const person2 = new Person("other person", 19);

      expect(person1.tryUpdate(person2)).to.equal(true);
    });

    it("will return false if calling update(obj) was not successful", () => {
      const person2 = new Person("other person");

      expect(person1.tryUpdate(person2)).to.equal(false);
    });

    it("greetAll(persons) will return an array with the result of calling sayHello() on each of the person instances of the passed in array", () => {
      const person1 = new Person("person one", 11);
      const person2 = new Person("person two", 12);
      const person3 = new Person("person three", 13);
      const persons = [person1, person2, person3];
      expect(Person.greetAll(persons)).to.eql([
        `Hello, person one!`,
        `Hello, person two!`,
        `Hello, person three!`,
      ]);
    });
  });
});
