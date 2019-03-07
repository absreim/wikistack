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

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

module.exports = router;
