const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree", () => {
  it("returns the number 3", () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal", () => {
  context("when given a number between 1 and 1,000,000", () => {
    it("returns the reciprocal of that number", () => {
      expect(reciprocal(2)).to.equal(1 / 2);
      expect(reciprocal(10000)).to.equal(1 / 10000);
    });
  });

  context("when given a number less than 1 or greater than 1,000,000", () => {
    it("will throw a TypeError", () => {
      expect(() => reciprocal(0)).to.throw(TypeError);
      expect(() => reciprocal(10000000)).to.throw(TypeError);
    });
  });
});
