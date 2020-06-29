const express = require('express');
const router = express.Router();
const Product = require('../models/products');

// GET ALL PRODUCTS
router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//GET A PRODUCT BY ID
router.get('/:id', getProduct, (req, res) => {
	res.send(res.product);
});

// ADD PRODUCT
router.post('/', async (req, res) => {
	const product = new Product({
		name: req.body.name,
		brand: req.body.brand,
		category: req.body.category,
		imgUrl: req.body.imgUrl,
		description: req.body.description,
		price: req.body.price,
	});

	try {
		const newProduct = await product.save();
		res.status(201).json(newProduct);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//DELETE PRODUCT
router.delete('/:id', getProduct, async (req, res) => {
	try {
		await res.product.remove();
		res.json({ message: 'Product Deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// UPDATE PRODUCT
router.patch('/:id', getProduct, async (req, res) => {
	if (req.body.brand != null) {
		res.product.brand = req.body.brand;
	}
	if (req.body.name != null) {
		res.product.name = req.body.name;
	}
	if (req.body.category != null) {
		res.product.category = req.body.category;
	}
	if (req.body.description != null) {
		res.product.description = req.body.description;
	}
	if (req.body.imgUrl != null) {
		res.product.imgUrl = req.body.imgUrl;
	}
	if (req.body.price != null) {
		res.product.price = req.body.price;
	}

	try {
		const updProd = await res.product.save();
		res.json(updProd);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

async function getProduct(req, res, next) {
	let product;
	try {
		product = await Product.findById(req.params.id);
		if (product == null) {
			return res.status(404).json({ message: 'Cannot find product' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	res.product = product;
	next();
}

module.exports = router;
