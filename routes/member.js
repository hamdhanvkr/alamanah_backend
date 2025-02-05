const express = require('express'); 
const route = express.Router();
const Member = require('../models/member');

route.get('/memberdetails', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    }
    catch (error) {
        console.error(error);
    }
})

module.exports =route;