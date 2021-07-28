const store = require('./store')

function crearProfesion(name, descripcion){
    if(!name){
        return Promise.reject('Invalid name')
    }
    const profesion = {
        name: name,
        descripcion: descripcion,
    }
    return store.add(profesion)
}

function listarProfesion(){
    return store.list()
}

module.exports = {
    crearProfesion,
    listarProfesion
}