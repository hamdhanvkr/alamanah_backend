const express = require('express');
const route = express.Router();
const Login = require('../models/login')


route.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // console.log(username, password);
    try {
        const users = await Login.findOne({ username: username })

        if (users) {
            if (users.password === password) {
                return res.json({ success: true, message: "LOGIN SUCCESS" });
            }
            else {
                return res.json({ success: false, message: "PASSWORD WRONG" });

            }
        }
        else {
            return res.json({ success: false, message: "USER IS NOT AVAILABLE" });

        }
    }
    catch (error) {

    }
})

module.exports = route;