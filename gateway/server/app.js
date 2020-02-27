const express = require('express');
const routes = require('./routes/index.js');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
});

const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', routes);

app.get('/', function (req, res) {
    res.send('Homepage');
});

module.exports = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

