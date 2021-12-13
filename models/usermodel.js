const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    title: {
        type: String
    },
    name: {
        type: String
    },
    number: {
        type: Number
    },
    designation: {
        type: String
    },
    organisation: {
        type: String
    },
    councilName: {
        type: String
    },
    councilNumber: {
        type: Number
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    pincode: {
        type: Number
    },
    country: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;