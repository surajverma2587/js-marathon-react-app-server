const data = require('./data');

const getData = async (req) => {
  req.payload = { success: true, data };

  return req;
};

module.exports = { getData };