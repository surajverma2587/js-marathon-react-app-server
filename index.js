const app = require("./src/app");

const server = app.listen(4000, () => console.log('Navigate to http://localhost:4000'));

module.exports = server;