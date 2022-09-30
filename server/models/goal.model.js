const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema (
    {
        maxDailyCalories: {
            type: Number,
            required: [true, 'Please enter desired max daily calories']
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Goal = mongoose.model('goal', GoalSchema);
module.exports = Goal;