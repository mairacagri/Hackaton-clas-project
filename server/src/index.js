const createServer = require("./createServer");
const logger = require("./utils/logger");

const app = createServer();

//Start our server so that it listens for HTTP requests!
const PORT = 4000
app.listen(PORT, function () {
    logger.info(`App is running on http://localhost:${PORT}`);
});