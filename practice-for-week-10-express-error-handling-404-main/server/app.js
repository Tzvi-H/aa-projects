const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET / This is the root URL");
});

// undefined routes
app.use((req, res, next) => {
  const e = new Error("Sorry, the requested resource couldn't be found");
  e.status = 404;
  throw e;
});

// error handler
app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.status || 500);
  res.json({
    message: error.message,
    statusCode: error.status || 500,
  });
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
