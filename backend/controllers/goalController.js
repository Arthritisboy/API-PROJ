// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    if(!req.body.test) {
        res.status(400)
        throw new Error('Please add a test field') 
    }
    res.status(200).json({message: 'Set goals'})
}

// @desc Update Goals
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
}

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}