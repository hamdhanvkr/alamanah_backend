require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());



//---------------------------------------------------------------------------------------------------------------//

// Route Imports 

const Login = require('./routes/login');
const Member = require('./routes/member');
const Amountentry = require('./routes/amountentry')



//---------------------------------------------------------------------------------------------------------------//

// Route Call

app.use('/api', Login);
app.use('/api', Member);
app.use('/api', Amountentry);



//---------------------------------------------------------------------------------------------------------------//

// Db Connection

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


//---------------------------------------------------------------------------------------------------------------//



















// app.get('/amountentry', async (req, res) => {
//     try {
//         const amounts = await Amount.find().sort({ date: -1 });
//         res.json(amounts);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error retrieving data');
//     }
// });

// // Save new entry
// app.post('/amountsave', async (req, res) => {
//     const { name, amounts, nodays, fine, total, date } = req.body;

//     if (!name || !amounts || !nodays || !fine || !total || !date) {
//         return res.status(400).json({ failed: 'All fields are required' });
//     }

//     try {
//         const newEntry = new Amount({
//             name,
//             amount: amounts,
//             noofdays: nodays,
//             fine,
//             total,
//             date: new Date(date),
//         });

//         await newEntry.save();
//         res.json({ success: 'Saved' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error saving data');
//     }
// });

// // Filter entries by date range
// app.get('/amountentry/filter', async (req, res) => {
//     const { fromDate, toDate } = req.query;

//     if (!fromDate || !toDate) {
//         return res.status(400).json({ failed: 'From and To dates are required' });
//     }

//     try {
//         const filteredEntries = await Amount.find({
//             date: {
//                 $gte: new Date(fromDate),
//                 $lte: new Date(toDate),
//             },
//         }).sort({ date: -1 });

//         res.json(filteredEntries);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error filtering data');
//     }
// });




