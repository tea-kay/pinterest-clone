const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PinSchema = new Schema({
  url: String,
  description: String,
  likes: { type: Number, default: 0 }
}, { timestamps: true })

const ModelClass = mongoose.model('pin', PinSchema)
module.exports = ModelClass
