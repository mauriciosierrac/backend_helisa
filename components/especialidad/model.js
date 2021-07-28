const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    name: String,
    descripcion: String,
})

const model = mongoose.model('Especialidad', mySchema)

module.exports = model