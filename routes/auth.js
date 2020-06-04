const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const bycrypt = require('bcrypt');
const { registerValidaton, loginValidaton } = require('../validation');

router.get('/register', async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.post('/register', async (req, res) => {
	//Validate inputed user date
	const { error } = registerValidaton(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if user is already in DB
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('Email already exists');

	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		phone: req.body.phone,
		password: req.body.password,
		active: req.body.active,
	});

	const salt = bycrypt.genSaltSync(10);
	const hash = bycrypt.hashSync(user.password, salt);
	user.password = hash;

	console.log('Pass', user.password);
	try {
		const newUser = await user.save();
		res.status(201).json({ user: user._id });
	} catch (error) {
		res.status(400).json({ message: err.message });
	}
});

router.post('/login', async (req, res) => {
	//Validate login Data
	const { error } = loginValidaton(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if user is already in DB
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Email or Password is wrong');

	// When password is correct
	const validPass = bycrypt.compareSync(req.body.password, user.password);
	if (!validPass) return res.status(400).send('Email or Password is wrong');

	//Create Token on Login
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
});
module.exports = router;
