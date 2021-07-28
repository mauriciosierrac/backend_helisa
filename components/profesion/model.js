const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    name: String,
    descripcion: String,
})

const model = mongoose.model('Profesion', mySchema)

module.exports = model