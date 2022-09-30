const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema (
    {
        maxDailyCalories: {
            type: Number,
            required: [true, 'Please enter desired max daily calories']
        }
    }
)