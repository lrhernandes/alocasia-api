const express = require('express');
const app = express();
const routes = require('./routes');
const sequelize = require('./database/connection')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes);

app.listen(3333);