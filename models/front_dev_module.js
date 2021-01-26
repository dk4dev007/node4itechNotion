const mongoose = require('mongoose')

const frontSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please enter name']
    },
    tech: {
        type: String,
        require: [true, 'Please add technology']
    }
})

module.exports = mongoose.model('front_dev', frontSchema)