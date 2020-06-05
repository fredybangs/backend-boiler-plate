const jwt = require('jsonwebtoken');
const config = require('../config/key');

module.exports = function (req, res, next) {
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Access Denied');

	try {
		const verified = jwt.verify(token, config.tokenSecret);
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send('Invalid Token');
	}
};
