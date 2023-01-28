const mongoose = require("mongoose")

const Schema = mongoose.Schema


const wordDictSchema = new Schema({
    word:{
        type: String
    },
    meaning:{
        type: String
    }
})

const wordDictionary = mongoose.model('wordDictionary', wordDictSchema)

module.exports = wordDictionary