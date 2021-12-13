const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/usermodel');
require('dotenv').config();

const app = express();
const uri = process.env.uri;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Database Connected Successfully");
});

const signupRoute = require('./routes/signup');

app.use('/home/signup', signupRoute);

app.listen(PORT, () => {
    console.log('Listening To Port', PORT);
});