// TODO: start your DB connection
const app = require("./server");

const { PORT = 8080, NODE_ENV = `development` } = process.env;

const httpServer = app.listen(PORT, () => {
	console.log(`Started on port: ${PORT}`);
});

httpServer.once(`close`, async () => {
	console.log(`Server stopped`);
});

module.exports = httpServer;
