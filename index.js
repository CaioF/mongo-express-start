const app = require('./server/server');
const logger = require('./server/middlewares/logger');

const port = process.env.PORT || 8888;
app.listen(port, () => {
  logger.ready(`Listening: http://localhost:${port}`);
});
