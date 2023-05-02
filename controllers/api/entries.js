const Entry = require('../../models/entry');

async function create(req,res) {
    try {
        //*create a new entry
        const entry = await Entry.create(req.body);
        console.log(entry);

    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

module.exports = {
    create,
}