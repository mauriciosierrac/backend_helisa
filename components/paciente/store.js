const Model = require('./model')


function crearPaciente(paciente) {
    const nuevoPaciente = new Model(paciente)
    return nuevoPaciente.save()
}


function listarPacientes(filterPaciente) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filterPaciente !== null) {
            filter = { personal: filterPaciente }
        }
        Model.find(filter)
            .populate('paciente')
            .exec((error, populated) => {
                if (error) {
                    reject(error)
                    return false
                }
                resolve(populated)
            })

    })
}

module.exports = {
    add: crearPaciente,
    list: listarPacientes,
}