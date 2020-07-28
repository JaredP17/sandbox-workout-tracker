const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day: {
    type: Date,
    default: Date.now
},
exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Enter the type of workout."
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the name of workout."
        },
        duration: {
            type: String,
            trim: true,
            required: "Enter the duration of workout."
        }
    }
    // {
    //     type: "resistance",
    //     name: "Bicep Curl",
    //     duration: 20,
    //     weight: 100,
    //     reps: 10,
    //     sets: 4
    //   }
]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;