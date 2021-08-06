require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
const helmet = require('helmet');

server.use(express.json());
server.use('*', (re, res, next) => {
	res.json({
		message: 'getting something!!',
	});
	server.get('/api/users', (req, res) => {
		console.log('getting all users');
	});
	server.post('/api/register', (req, res) => {
		console.log('creating a new user');
	});
	server.post('/api/login', (req, res) => {
		console.log('user exists');
	});
});

module.exports = server;
