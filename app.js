const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./db/fireStore');

const app = express();

app.use(bodyParser);

db && app.listen(process.env.PORT, () => {
    console.log('Server is up');
});


