const express = require('express');
const router = express.Router();
const sql = require('../MySQL/mysqlQueries');
const bodyParser = require('body-parser');

router.use(bodyParser());

router.get('/', (req, res) => {
    sql.getPost().then(result => {
        res.send(result[0]);
    }).catch(err =>{
        res.send("sem post");
    });
});

router.post('/', (req, res) => {
    if(sql.overridePost(req.body.title ,req.body.content) !== 0) {
        res.status(201).send();
    } else {
        res.status(500).send();
    }
})

module.exports = router;