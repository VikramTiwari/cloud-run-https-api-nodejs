require(`dotenv`).config();

const express = require(`express`);
const helmet = require(`helmet`);
// const cors = require(`cors`);

const api = require(`./api`);

const BODY_LIMIT = process.env.BODY_LIMIT || `32mb`;

const app = express();

app.use(helmet());
// app.use(cors({}));

app.use(express.json({ limit: BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: BODY_LIMIT }));
app.set(`trust proxy`, true);

app.get(`/_healthz`, (req, res) => {
	req.status(200).send(req.query);
});

// api router
app.use(`/api`, api);

app.use((err, req, res, next) => {
	console.log(err);
	if (!err.statusCode) err.statusCode = 500;
	res
		.status(err.statusCode)
		.json({ name: err.name, message: err.message, error: err.error });
});

module.exports = app;
