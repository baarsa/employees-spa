const express = require('express');
const http = require('http');
const path = require('path');

var app = express();
app.set('port', 8080);


const buildPath = path.join(__dirname, '../', 'build');
app.use('/', express.static(buildPath));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../', 'index.html'));
});

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server started at: http://localhost:${app.get('port')}/`); 
});