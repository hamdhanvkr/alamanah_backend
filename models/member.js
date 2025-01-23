const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    fathername:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    }
})

const Member = mongoose.model('member',memberSchema)

module.exports = Member