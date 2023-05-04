const mongoose = require('mongoose');

const Schema = require('mongoose').Schema;

//Create schema
//?schema defines structure of doc/type of doc

const entrySchema = new Schema({
    wordRom: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    wordKan: {
        type: String,
        trim: true,
        required: true
    },
    translation: {
        type: String,
        max: 100,
    },
    gloss: {
        type: String,
        max: 800
    },
    source: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8']
    },
    chapter: {
        type: Number,
        //something that restricts the number range
    },
    pageNo: {
        type: Number,
        //something that restricts the page possibilities
    },
    example: {
        type: String,
        max: 250
    },
    notes: {
        type: String,
        max: 1000
    }
}, {timestamps: true}
)

//Create model
//?applies schema to model that will interact with collection of model's name

module.exports = mongoose.model("Entry", entrySchema);