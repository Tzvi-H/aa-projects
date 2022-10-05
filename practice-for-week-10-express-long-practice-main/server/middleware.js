const logger = (req, res, next) => {
  console.log(req.method, req.url);

  res.on("finish", () => {
    console.log(res.statusCode);
  });

  next();
};

const unknownEndpoint = (req, res, next) => {
  const error = new Error("the requested resource couldn't be found.");
  error.statusCode = 404;

  throw error;
};

const errorHandler = (error, req, res, next) => {
  console.error(error);

  const statusCode = error.statusCode || 500;

  res.status(statusCode);

  const jsonResponse = {
    message: error.message,
    statusCode,
  };

  if (process.env.environment !== "production") {
    jsonResponse.stack = error.stack;
  }

  res.json(jsonResponse);
};

module.exports = { logger, unknownEndpoint, errorHandler };
