const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PinSchema = new Schema({
  url: String,
  description: String
}, { timestamps: true })

const ModelClass = mongoose.model('pin', PinSchema)
module.exports = ModelClass
