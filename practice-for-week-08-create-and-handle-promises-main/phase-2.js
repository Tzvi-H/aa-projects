function stretch(timeLeft) {
  timeLeft -= 1000;
  return new Promise((resolve, reject) => {
    if (timeLeft < 0) {
      return reject("you dont have enough time to stretch");
    }
    setTimeout(() => {
      resolve(timeLeft);
      console.log("done stretching");
    }, 1000);
  });
}

function runOnTreadmill(timeLeft) {
  timeLeft -= 500;

  return new Promise((resolve, reject) => {
    if (timeLeft < 0) {
      return reject("you dont have enough time to run on treadmill");
    }

    setTimeout(() => {
      resolve(timeLeft);
      console.log("done running on treadmill");
    }, 500);
  });
}

function liftWeights(timeLeft) {
  timeLeft -= 2000;
  return new Promise((resolve, reject) => {
    if (timeLeft < 0) {
      return reject("you dont have enough time to lift weights");
    }

    setTimeout(() => {
      resolve(timeLeft);
      console.log("done lifting weights");
    }, 2000);
  });
}

function workout(totalTime) {
  stretch(totalTime)
    .then(runOnTreadmill)
    .then(liftWeights)
    .then((timeLeft) =>
      console.log("done working out" + ` with ${timeLeft / 1000} seconds left`)
    )
    .catch((message) => {
      console.log("Error: " + message);
    });
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch

// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill

// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights

workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
