var http = require('http');
var express = require('express');
var port = 8180;
var local_host = '127.0.0.1';
var andre = 3000;
var app = express();

/*
app.get('/', function(req, res) {
	res.send('Good Night, Steve');
});

app.listen(andre, function(){
	
	console.log('Resonse OK');
});


	GET /books
	GET /books/:specific-book
	POST /books/
	PUT /books/
not	DELETE /books/:specific-book
	GET /books/:specific-group
	GET	/books/:group-names
not	DELETE /books/:specific-book
	

*/


function handle_request(request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	
	});

	
	response.end('Good Morning, Steve');
	console.log('requested');
	
}

http.createServer(handle_request).listen(port, local_host);

console.log('Started Node.js http server at ' + local_host + ':' + port);




	
	
	
