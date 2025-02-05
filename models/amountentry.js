const mongoose = require('mongoose');

const amountentrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    noofdays: {
        type: Number,
        required: truez
    },
    fine: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Amount = mongoose.model('amountentry', amountentrySchema);

module.exports = Amount;
