const { expect } = require("chai");
const reverseString = require("../problems/reverse-string");

describe("reverseString", () => {
  it('with input "fun" will return "nuf"', () => {
    expect(reverseString("fun")).to.equal("nuf");
  });

  it("throws an error when passed a non string-type argument", () => {
    expect(() => reverseString([123])).to.throw(TypeError);
  });
});
