const express = require('express');
const db = require('./db');
const app = express();
const routes = require('./routes');

const router = express.Router();
app.use('/', routes);

db.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

