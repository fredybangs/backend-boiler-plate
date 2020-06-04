const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		max: 255,
	},
	lastName: {
		type: String,
		required: true,
		max: 255,
	},
	email: {
		type: String,
		required: true,
		max: 255,
	},
	phone: {
		type: String,
		required: false,
	},
	password: {
		type: String,
		required: true,
		max: 1024,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	active: {
		type: Boolean,
		required: false,
	},
});

module.exports = mongoose.model('User', userScheme);
