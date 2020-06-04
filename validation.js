const Joi = require('@hapi/joi');

// Register Validation
const registerValidaton = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().max(255).required(),
		lastName: Joi.string().max(255).required(),
		email: Joi.string().max(255).required().email(),
		password: Joi.string().max(1024).required(),
		phone: Joi.string(),
		active: Joi.boolean(),
	});
	return schema.validate(data);
};

// LogiValidation
const loginValidaton = (data) => {
	const schema = Joi.object({
		email: Joi.string().max(255).required().email(),
		password: Joi.string().max(1024).required(),
	});
	return schema.validate(data);
};

module.exports.registerValidaton = registerValidaton;
module.exports.loginValidaton = loginValidaton;
