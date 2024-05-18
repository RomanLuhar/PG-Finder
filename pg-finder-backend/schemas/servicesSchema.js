const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const servicesSchema = new Schema({
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
})
