require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Login = require('./models/login')
const Member = require('./models/member');


//------------------------------------------ DB CONNECTION ---------------------------------------------------------//

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


//---------------------------------------------------------------------------------------------------//


app.post('/login', async (req, res) => {
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

app.get('/memberdetails',async (req,res)=>{
    try{
        const members = await Member.find();
        res.json(members);
    }
    catch (error){
        console.error(error);
    }
})

app.get('/amountentry',async(req,res)=>{
    try{
        const amount = await Member.find();
        res.json(amount);
    }
    catch(error){
        console.error(error);
    }
})

