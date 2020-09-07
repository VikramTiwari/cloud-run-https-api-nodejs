const express = require(`express`);

const router = express.Router();

function getUser(req, res, next) {
	try {
		// TODO
		res.json({});
	} catch (error) {
		next(error);
	}
}

function createUser(req, res, next) {
	try {
		// TODO
		res.json({});
	} catch (error) {
		next(error);
	}
}

function updateUser(req, res, next) {
	try {
		// TODO
		res.json({});
	} catch (error) {
		next(error);
	}
}
function deleteUser(req, res, next) {
	try {
		// TODO
		res.json({});
	} catch (error) {
		next(error);
	}
}

router
	.route(`/`)
	.get(getUser)
	.post(createUser)
	.put(updateUser)
	.delete(deleteUser);

module.exports = router;
