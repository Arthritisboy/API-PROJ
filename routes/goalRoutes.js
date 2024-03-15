const express = require('express');
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../backend/controllers/goalController');
const router = express.Router(); // this is how we're going to initialize our routes.


// router.get('/', getGoals);

// router.post('/', setGoal);

// router.put('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router