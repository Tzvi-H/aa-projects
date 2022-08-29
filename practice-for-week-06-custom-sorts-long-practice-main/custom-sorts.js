function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) {
      return -1;
    } else if (b % 2 === 1 && a % 2 === 0) {
      return 1;
    } else {
      return a - b;
    }
  });
}

function validAnagrams(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) {
      return -1;
    } else if (b.toString().length > a.toString().length) {
      return 1;
    } else {
      return a - b;
    }
  });
}

function frequencySort(arr) {
  const frequency = arr.reduce((frequency, num) => {
    frequency[num] = frequency[num] || 0;
    frequency[num]++;
    return frequency;
  }, {});

  return arr.sort((a, b) => {
    if (frequency[a] < frequency[b]) {
      return -1;
    } else if (frequency[b] < frequency[a]) {
      return 1;
    } else {
      return b - a;
    }
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
