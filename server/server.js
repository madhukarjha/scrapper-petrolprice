const express = require('express');
const db = require('./db');
const app = express();

const router = express.Router();
router.use();

db.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

