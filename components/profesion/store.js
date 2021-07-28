const Model = require('./model')


function crearProfesion(profesion){
    const nuevaProfesion = new Model(profesion)
    return nuevaProfesion.save()
}


function listarProfesion(){
    return Model.find()
}


module.exports = {
    add: crearProfesion,
    list: listarProfesion,
}