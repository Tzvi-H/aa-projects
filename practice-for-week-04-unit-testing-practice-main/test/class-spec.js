const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;

  beforeEach(() => {
    word = new Word("basketball");
  });
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("basketball");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("bsktbll");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("aea");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal("asketballbay");
    });
  });
});
