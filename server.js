var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res)=>{
    res.send('home');
    
});

var port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`server listening on port:${port}`);
});