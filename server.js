const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/visuals.html'));
});

app.listen(3000, () => console.log('Webhook server is listening, port 3000'));