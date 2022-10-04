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

module.exports = { logger, unknownEndpoint };
