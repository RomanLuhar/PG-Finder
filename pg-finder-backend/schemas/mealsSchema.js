const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealsSchema = new Schema({
    meals: {
        breakfast: {
          type: Boolean,
        },
        lunch: {
          type: Boolean,
        },
        dinner: {
          type: Boolean,
        },
        }
    });

module.exports = mongoose.model("meals", mealsSchema);