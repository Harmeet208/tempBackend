const router = require('express').Router();
let User = require('../models/usermodel');

router.route('/').post((req, res) => {
    if (req) {

        console.log("request came");
    }
    const obj = {
        email: req.body.email,
        password: req.body.password,
        title: req.body.title,
        name: req.body.name,
        number: req.body.number,
        designation: req.body.designation,
        organisation: req.body.organisation,
        councilName: req.body.councilName,
        councilNumber: req.body.councilNumber,
        address: req.body.address,
        city: req.body.city,
        pincode: req.body.pincode,
        country: req.body.country
    }
    const newUser = new User(obj);

    newUser.save()
        .then(() => res.json('User Added'))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;