var express = require('express');
var http = require('http');
var app = require('./app');

const port = process.env.PORT || 4000;

const server = http.createServer(app);
// Connect to the server

server.listen(port, function()
{ 
	console.log("Server started on 4000....");
});

