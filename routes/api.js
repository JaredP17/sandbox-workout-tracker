const router = require("express").Router();
const db = require("../models");

// Initialize new workout
router.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      console.log("Success!")
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get route weekly stats
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7) // 7 for days of the week
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
