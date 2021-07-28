const store = require('./store')

function crearCita(date, paciente, medico, enfermera, procedimientoRealizado){
    if(!paciente || !medico){
        return Promise.reject('Invalid name')
    }
    const citas = {
        date: new Date(),
        paciente: paciente,
        medico: medico,
        enfermera: enfermera,
        procedimientoRealizado: procedimientoRealizado,
    }
    return store.add(citas)
}

function listarCita(){
    return store.list()
}

module.exports = {
    crearCita,
    listarCita,
}