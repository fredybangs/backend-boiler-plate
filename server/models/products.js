const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	brand: {
		type: String,
	},
	category: {
		type: String,
	},
	imgUrl: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
});

module.exports = mongoose.model('Product', productSchema);
