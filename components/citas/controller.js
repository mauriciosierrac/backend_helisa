const store = require('./store')

function crearCita(paciente, atendidoPor, ProcedimientoRealizado) {
    return new Promise((resolve, reject) => {

        if (!paciente) {
            console.error('[Citas Error] no ingreso datos exigidos')
            reject('Invalid name')
            return false
        }
        const citas = {
            date: new Date(),
            paciente: paciente,
            atendidoPor: atendidoPor,
            ProcedimientoRealizado: ProcedimientoRealizado,
        }
        store.add(citas)
        resolve(citas)
    })
}

function listarCita(pacienteId) {
    return new Promise((resolve, reject) => {
        resolve(store.list(pacienteId))
    })
}

module.exports = {
    crearCita,
    listarCita,
}