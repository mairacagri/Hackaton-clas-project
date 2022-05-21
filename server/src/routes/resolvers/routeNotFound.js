const logger = require("../../utils/logger");

module.exports = function routeNotFound(_req, res) {
  logger.info(`INVALID ROUTE - ${req.method} - ${req.originalUrl}`);
  res.status(404).send("This route doesn't exist");
};
