const store = require('./store')

function crearEspecialidad(name, descripcion){
    if(!name){
        return Promise.reject('Invalid name')
    }
    const especialidad = {
        name: name,
        descripcion: descripcion,
    }
    return store.add(especialidad)
}

function listarEspecialidad(){
    return store.list()
}

module.exports = {
    crearEspecialidad,
    listarEspecialidad
}