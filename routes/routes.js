const express = require('express');
const router = express.Router();
const sql = require('../MySQL/mysqlQueries');
const bodyParser = require('body-parser');

router.use(bodyParser());

router.get('/', (req, res) => {
    sql.getPost((data) => {
        res.send(data[0]);
    });
});

router.post('/', (req, res) => {
    sql.overridePost(req.body.title, req.body.content, (rows) => {
        if (rows !== 0) {
            res.status(201).send();
        } else {
            res.status(500).send();
        }
    });
});

module.exports = router;