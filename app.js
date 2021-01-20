const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

app.listen(process.env.PORT, () => {
    console.log('Server is up');
});

