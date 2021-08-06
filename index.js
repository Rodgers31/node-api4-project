const server = require('./server');

const port = 6000;
const PORT = process.env.PORT || port;

server.listen(PORT || port, () => {
	console.log(`listening on ${PORT}`);
});
