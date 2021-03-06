const express = require('express');
const http = require('http');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const Employees = require('./employees/Employees');

var app = express();
app.set('port', 8080);

app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
);
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.json());

const buildPath = path.join(__dirname, '../', 'build');
app.use('/', express.static(buildPath));

app.get('/get-employees', function(req, res) {
	try {
		let employees = JSON.stringify(
			(new Employees(path.join(__dirname, '../', 'data/employees.json'))).getEmployees()
			);
		res.send({
			employees
		});
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});

app.post('/save-employee', function(req, res) {
	try {
		(new Employees(path.join(__dirname, '../', 'data/employees.json')))
			.saveEmployee(JSON.parse(req.body.employee));
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});

app.post('/create-employee', function(req, res) {
	try {
		let newId = (new Employees(path.join(__dirname, '../', 'data/employees.json')))
			.createEmployee(JSON.parse(req.body.employee));
		res.send({
			id: newId
		});
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '../', 'index.html'));
});

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server started at: http://localhost:${app.get('port')}/`); 
});