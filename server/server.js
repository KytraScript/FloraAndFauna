const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('./public'));

app.listen(4870, function () {
    console.log('New Dev Server Listening on localhost:4870!');
});
