const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    name: String,
    edad: Number,
    direccion: String,
    telefono: Number,
    profesion:{
        type: Schema.ObjectId,
        ref: 'Profesion'
    },
    especialidad: {
        type: Schema.ObjectId,
        ref: 'Especialidad'
    },
})

const model = mongoose.model('Personal', mySchema)

module.exports = model
