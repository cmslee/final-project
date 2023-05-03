const express = require('express');
const router = express.Router();
const entriesCtrl = require('../../controllers/api/entries');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//*Index route: get all workouts
router.get('/', entriesCtrl.index)

//*New route: create new entry
router.post('/', entriesCtrl.create);

//*Show route: get a single entry
router.get('/:id', entriesCtrl.show)

//*Delete route: delete an entry
router.delete('/:id', entriesCtrl.deleteAnEntry)

//*Edit route: update an entry
router.put('/:id', entriesCtrl.updateEntry)

module.exports = router;