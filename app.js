const morgan = require('morgan');
const express =  require('express');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(express.static('public'));

const router = require('./routes');
app.use(router);

const models = require('./models');

async function init(){
    await models.db.sync({force: true});
    const port = 3719;
    app.listen(port, () => {
        console.log(`Listening on port ${port}!`);
    });
}

init();
