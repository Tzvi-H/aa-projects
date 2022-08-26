function anagrams(str1, str2) {
  const obj1 = {};
  const obj2 = {};
  for (let char of str1) {
    obj1[char] = obj1[char] || 0;
    obj1[char]++;
  }
  for (let char of str2) {
    if (!obj1[char]) return false;
    obj2[char] = obj2[char] || 0;
    obj2[char]++;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

function commonElements(arr1, arr2) {
  const set1 = new Set();
  for (let element of arr1) {
    set1.add(element);
  }

  return arr2.filter((element) => set1.has(element));
}

function duplicate(arr) {
  const set = new Set();
  for (let element of arr) {
    if (set.has(element)) return element;
    set.add(element);
  }
}

function twoSum(nums, target) {
  const set = new Set();
  for (const num of nums) {
    const difference = target - num;
    if (set.has(difference)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
}

function wordPattern(pattern, strings) {
  let result = "";
  let asciCode = 65;
  let object = {};
  for (let i = 0; i < pattern.length; i++) {
    const string = strings[i];
    if (object.hasOwnProperty(string)) {
      result += object[string];
    } else {
      const char = String.fromCharCode(asciCode);
      result += char;
      object[string] = char;
      asciCode++;
    }
  }
  return result === pattern;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
