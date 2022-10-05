require("dotenv").config();
const express = require("express");
require("express-async-errors");
const dogsRouter = require("./routes/dogs");
const app = express();

const { logger, unknownEndpoint, errorHandler } = require("./middleware");

app.use("/static", express.static("assets"));
app.use(express.json());
app.use(logger);
app.use("/dogs", dogsRouter);
// For testing purposes, GET /

app.get("/", (req, res) => {
  res.json(
    "Express server running. No content provided at root level. Please use another route."
  );
});

// For testing express.json middleware
app.post("/test-json", (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get("/test-error", async (req, res) => {
  throw new Error("Hello World!");
});

app.use(unknownEndpoint);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
