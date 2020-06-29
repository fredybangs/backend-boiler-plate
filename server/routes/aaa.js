const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const Movie = require('../models/movie');

// GET ALL MOVIES
router.get('/', async (req, res) => {
	try {
		const movies = await Movie.find();
		res.json(movies);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//GET A MOVIE BY ID
router.get('/:id', getMovie, (req, res) => {
	res.send(res.movie);
});

// ADD MOVIE
router.post('/', async (req, res) => {
	const movie = new Movie({
		date: req.body.name,
		title: req.body.title,
		genres: req.body.genres,
		imgUrl: req.body.imgUrl,
		description: req.body.description,
		price: req.body.price,
	});

	try {
		const newMovie = await movie.save();
		res.status(201).json(newMovie);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//DELETE MOVIE
router.delete('/:id', getMovie, async (req, res) => {
	try {
		await res.movie.remove();
		res.json({ message: 'Movie Deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// UPDATE MOVIE
router.patch('/:id', getMovie, async (req, res) => {
	if (req.body.title != null) {
		res.movie.title = req.body.title;
	}
	if (req.body.date != null) {
		res.movie.date = req.body.date;
	}
	if (req.body.genres != null) {
		res.movie.genres = req.body.genres;
	}
	if (req.body.description != null) {
		res.movie.description = req.body.description;
	}
	if (req.body.imgUrl != null) {
		res.movie.imgUrl = req.body.imgUrl;
	}
	if (req.body.price != null) {
		res.movie.price = req.body.price;
	}

	try {
		const updMov = await res.movie.save();
		res.json(updMov);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

async function getMovie(req, res, next) {
	let movie;
	try {
		movie = await Movie.findById(req.params.id);
		if (movie == null) {
			return res.status(404).json({ message: 'Cannot find movie' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	res.movie = movie;
	next();
}

module.exports = router;
