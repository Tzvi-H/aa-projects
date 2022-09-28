function findElementById(id) {
  return document.getElementById(id);
}

function findFirstElementOfTag(tag) {
  return document.querySelector(tag);
}

function findFirstElementOfClass(cls) {
  // Return the first occurence of an element of class `cls`
  return document.querySelector(`.${cls}`);
}

function findElementsOfTag(tag) {
  // Return an array of elements that have a tag name of `tag`
  return document.querySelectorAll(tag);
}

function findElementsOfClass(cls) {
  // Return an array of elements that have are of class `cls`
  return document.querySelectorAll(`.${cls}`);
}

export default {
  findElementById,
  findElementsOfTag,
  findElementsOfClass,
  findFirstElementOfClass,
  findFirstElementOfTag,
};
