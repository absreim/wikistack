const express = require('express');
const router = express.Router();

const layout = require('./views/layout');

router.get('/', (req, res, next) => {
    try {
        res.send(layout('Hello, World!'));
    }
    catch (error){
        console.error(error);
    }
});

module.exports = router;
