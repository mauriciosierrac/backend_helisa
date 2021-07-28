const store = require('./store')

function crearPaciente(name, edad, direccion, telefono, eps){
    if(!name){
        return Promise.reject('Invalid name')
    }
    const paciente = {
        name: name,
        edad: edad,
        direccion: direccion,
        telefono: telefono,
        eps: eps,
    }
    return store.add(paciente)
}

function listarPaciente(){
    return store.list()
}

module.exports = {
    crearPaciente,
    listarPaciente
}