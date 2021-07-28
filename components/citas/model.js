const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    date: Date,
    paciente: {
        type: Schema.ObjectId,
        ref: 'Paciente',
    },
    atendidoPor: {
        type: Schema.ObjectId,
        ref: 'Personal',
    },
    ProcedimientoRealizado: String,

})

const model = mongoose.model('Cita', mySchema)

module.exports = model