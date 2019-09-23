const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');
const { errorHandler } = require('./util/middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.use((err, req, res, next) => {
  errorHandler(res, err.statusCode, err.title, err.message);
});

app.get('/', (req, res) => res.send('Server is running...'));

module.exports = app;