const mongoose = require('mongoose');

const Schema = require('mongoose').Schema;

//Create schema
//?schema defines structure of doc/type of doc

const entrySchema = new Schema({
    wordRom: {
        type: String,
        trim: true,
        required: true
    },
    wordKan: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    definition: {
        type: String,
        max: 800
    },
    source: {
        type: String,
        enum: ['v.1', 'v.2', 'v.3', 'v.4', 'v.5', 'v.6', 'v.7', 'v.8']
    },
    chapter: {
        type: Integer,
        //something that restricts the number range
    },
    pageNo: {
        type: Integer,
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