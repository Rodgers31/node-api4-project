const express = require('express');

const server = express();

server.use(express());

server.get('/', (req, res) => {
	res.body.status(200).json({
		message: 'sounds good',
	});
});
server.get('/api/users', (req, res) => {
	res.send('<h1>Welcome to the users</h1>');
});
server.get('/api/login', (req, res) => {
	res.send('<h1>Welcome to the login page</h1>');
});

module.exports = server;
