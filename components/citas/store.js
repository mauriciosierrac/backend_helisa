const Model = require('./model')


function crearCitas(cita){
    const nuevaCita = new Model(cita)
    return nuevaCita.save()
}


function listarCitas(){
    return Model.find()
}


module.exports = {
    add: crearCitas,
    list: listarCitas,
}