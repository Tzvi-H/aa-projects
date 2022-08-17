const { expect } = require("chai");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap", () => {
  let arr = [];
  let callback;

  beforeEach(() => {
    arr = [1, 2, 3];
    callback = (el) => el * 2;
  });

  it("invokes the function on each element in the array", () => {
    const spy = chai.spy(callback);
    expect(myMap(arr, spy)).to.eql([2, 4, 6]);
    expect(spy).to.have.been.called.exactly(arr.length);
  });

  it("does not mutate the input array", () => {
    myMap(arr, callback);
    expect(arr).to.eql([1, 2, 3]);
  });

  it("does not invoke the built in Array.map method", () => {
    const spy = chai.spy.on(arr, "map");
    myMap(arr, callback);
    expect(spy).not.to.have.been.called();
  });
});
