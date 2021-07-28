const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    name: String,
    edad: Number,
    direccion: String,
    telefono: Number,
    eps: String,
})

const model = mongoose.model('Paciente', mySchema)

module.exports = model