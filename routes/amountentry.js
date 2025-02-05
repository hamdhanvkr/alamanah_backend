const express = require('express');
const route = express.Router();
const Member = require('../models/member');

route.get('/amountentry', async (req, res) => {
    try {
        const amount = await Member.find();
        res.json(amount);
    }
    catch (error) {
        console.error(error);
    }
})

module.exports = route;