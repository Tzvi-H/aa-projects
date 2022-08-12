// 1.
function sum(array) {
  try {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(e.message);
    }
  }
}

// let res = sum(null);
// console.log(res);

// 2.
function sayName(name) {
  if (typeof name === "string") {
    console.log(name);
  } else {
    throw new TypeError("Invalid name! Must be a string!");
  }
}
try {
  // sayName("Alex");
  // sayName(1);
} catch (e) {
  // console.log(e);
  // console.log("----");
  // console.error(e);
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch (e) {
  console.log("hello world");
}
