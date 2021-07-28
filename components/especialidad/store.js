const Model = require('./model')


function crearEspecialidad(especialidad){
    const nuevaEspecialidad = new Model(especialidad)
    return nuevaEspecialidad.save()
}


function listarEspecialidad(){
    return Model.find()
}


module.exports = {
    add: crearEspecialidad,
    list: listarEspecialidad,
}