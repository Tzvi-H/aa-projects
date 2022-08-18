class ValidationError extends Error {
  constructor(message = null, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, "ValidationError");
    }
    this.message = message || "Invalid input";
    this.name = "ValidationError";
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
