const logger = require('./logger');

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`404 - Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? 'do not panic' : err.stack
  });
  logger.error(err);
  next();
}

module.exports = {
  notFound,
  errorHandler
};
