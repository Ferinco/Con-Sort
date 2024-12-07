const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ title: "validation failed", message: err.message });
      break;
    case constants.NOT_FOUND:
      res.json({ title: "Not Found", message: err.message });
      break;
  }
};
module.exports = errorHandler;
