var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// this responds with 'hello world' on the homepage;
app.get('/', function(req, res){
	console.log('Got a GET request for the home page');

	res.send('Hello World from Juns NodeJS Express Server');
});

app.post('/process_post', urlencodedParser, function(req, res){
	// prepare output in JSON format
	response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
});

// this responds a POST request for the homepage
app.post('/', function(req, res){
	console.log('Got a POST request for the home page');
	res.send('Hello POST Request, on Homepage');
});

// this responds a GET request fro the /list_user page
app.get('/list_user', function(req, res){
	console.log('Got a GET request for /list_user');
	res.send('Page Listing of list_user');
});

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res){
	console.log('Got a GET request for /ab*cd');
	res.send('Page Pattern Match ab*cd wild card');
});


app.use(express.static('public'));

app.get('/index.html', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function(req, res){
	// prepare output in JSON format
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
});


var server = app.listen(8086, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port)
});