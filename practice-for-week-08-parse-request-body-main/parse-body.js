function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map((keyValue) => {
    return keyValue.split("=");
  });
}

function thirdStep(input) {
  return input.map((keyValue) => {
    const [key, value] = keyValue;
    return [key.replace(/\+/g, " "), value.replace(/\+/g, " ")];
  });
}

function fourthStep(input) {
  return input.map((keyValue) => {
    const [key, value] = keyValue;
    return [decodeURIComponent(key), decodeURIComponent(value)];
  });
}

function fifthStep(input) {
  return input.reduce((acc, keyValue) => {
    const [key, value] = keyValue;
    acc[key] = value;
    return acc;
  }, {});
}

function parseBody(str) {
  if (str.length === 0) {
    return {};
  }

  const step1 = firstStep(str);
  const step2 = secondStep(step1);
  const step3 = thirdStep(step2);
  const step4 = fourthStep(step3);
  const step5 = fifthStep(step4);

  return step5;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
