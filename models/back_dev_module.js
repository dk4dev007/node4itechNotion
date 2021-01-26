const mongoose = require('mongoose')

const backSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please enter name']
    },
    tech: {
        type: String,
        require: [true, 'Please add technology']
    }
})

module.exports = mongoose.model('back_dev', backSchema)