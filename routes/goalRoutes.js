const express = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../backend/controllers/goalController");
const router = express.Router(); // this is how we're going to initialize our routes.

const { protect } = require("../backend/middleware/authMiddleware");

// router.get('/', getGoals);

// router.post('/', setGoal);

// router.put('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
