const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./db/fireStore');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', routes);

db && app.listen(process.env.PORT, () => {
    console.log('Server is up');
});


