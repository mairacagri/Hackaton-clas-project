const express = require("express");
const router = require("./routes");
const cors = require("cors");

module.exports = function () {
  const app = express();
  app.use(express.json());
  app.use(cors({ origin: "*" }));
  app.use("/", router);
  return app;
};
