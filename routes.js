const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.send('Hello, World!');
    }
    catch (error){
        console.error(error);
    }
});

module.exports = router;
