const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;


const data = require('./routes/data');

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public/')));

app.use('/data', data);


app.listen(port, function () {
    console.log('server started at '+ port);
});