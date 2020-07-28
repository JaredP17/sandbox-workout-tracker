const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter the type of workout.",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter the name of workout.",
        },
        duration: {
          type: Number,
          required: "Enter the duration of workout.",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce(
    (totalDuration, exercise) => totalDuration + exercise.duration,
    0
  );
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
