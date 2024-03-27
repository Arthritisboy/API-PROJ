const Goal = require("../models/goalModel");
const User = require("../models/userModel");

const asyncHandler = require("express-async-handler");
// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }

  // To make sure that the goal user matches the logged in user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }

  // To make sure that the goal user matches the logged in user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
  //res.status(200).json({deletedGoal, message: 'Goal deleted'})

  await goal.deleteOne();

  res.status(200).json({ message: "Goal Deleted", id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
