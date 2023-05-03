//*Control functions for different routes

const Entry = require('../../models/entry');

// Get all entries
async function index (req, res) {
    try {
        const entries = await Entry.find({}).sort({wordRom: 1});
        res.status(200).json(entries)
    } catch (e) {
        res.status(400).json({msg: e.message});
    }
}

// Get a single workout
async function show (req, res) {
    try {
        const entry = await Entry.findById(req.params.id);
        res.status(200).json(entry)
    } catch (e) {
        res.status(404).json({msg: e.message})
    }
}

// Create an Entry
async function create (req,res) {
    // add doc to db
    try {
        const entry = await Entry.create(req.body);
        console.log(entry);
        res.status(200).json(entry)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

// Delete an Entry
async function deleteAnEntry (req,res) {
    try {
        const entry = await Entry.findByIdAndRemove(req.params.id);
        res.status(200).json(entries)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Update an Entry
async function updateEntry(req,res) {
    try {
        const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(entry)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    create,
    index,
    show,
    deleteAnEntry,
    updateEntry
}