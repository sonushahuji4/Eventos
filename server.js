var express = require('express');
var http = require('http');
var app = require('./app');


const port = process.env.PORT || 4000;

const server = http.createServer(app);
//var io = require('socket.io').listen(server);
// Connect to the server

// _users = [];
// _connections = [];

// io.sockets.on('connection',function(socket)
// {
// 	_connections.push(socket);

// 	// for connection
// 	console.log('Connected: %s sockets connected',_connections.length);

// 	// for disconnect
// 	socket.on('disconnect', function(data)
// 	{
// 		_connections.splice(_connections.indexOf(socket),1);
// 	    console.log('Disconnected: %s sockets connected',_connections.length);
// 	})
	
// 	socket.on('send message', function(data)
// 	{
// 		console.log(data)
// 		io.sockets.emit('new message',{msg:data});
// 	})
// });

server.listen(port, function()
{ 
	console.log("Server started on 4000....");
});


