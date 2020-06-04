const config = require('./config/key');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const verify = require('./routes/verifyToken');

// Connect to DB
mongoose.connect(config.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
let db = mongoose.connection;

db.on('error', (error) => {
	console.log(error);
});
db.once('open', () => {
	console.log('Connected to Database');
});

//Body Parser MIddleware
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Users Route
app.use('/api/user', require('./routes/auth'));

PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
