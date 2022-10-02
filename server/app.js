const express = require("express");
const app = express();
const PORT = 5000;

app.get("/status", (req, res) => {
  res.send("The server is alive!");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
