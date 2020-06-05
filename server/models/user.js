const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
	name: {
		type: String,
		max: 255,
	},
	lastname: {
		type: String,
		max: 255,
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: 1,
	},
	token: {
		type: String,
	},
	tokenExp: {
		type: Number,
	},
	password: {
		type: String,
		required: true,
		min: 6,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	role: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model('User', userScheme);
