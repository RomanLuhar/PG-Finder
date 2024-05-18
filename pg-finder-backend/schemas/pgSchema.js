const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pgSchema = new Schema({
  id: {
    type: Number,
    // require: true
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "propertyType",
    // require: true
  },
  pgtype: {
    type: Schema.Types.ObjectId,
    ref: "pgType",
    // require: true
  },
  name: {
    type: String,
    // require: true
  },
  address: {
    type: String,
    // require: true
  },
  rent: {
    type: Number,
    // require: true
  },
  floor: {
    type: Number,
    // require: true
  },
  image: {
    name: {
      type: String,
    },
    size: {
      type: Number,
    },
    url: {
      type: String,
    },
    
    type: {
      type: String,
    }
  },
  facilities: {
    fullFurnished: {
      type: Boolean,
    },
    parking: {
      type: Boolean,
    },
    wifi: {
      type: Boolean,
    },
    ac: {
      type: Boolean,
    },
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
    },
  },
});

module.exports = mongoose.model("pg", pgSchema);
