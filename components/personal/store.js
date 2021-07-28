const Model = require('./model')

function crearPersonal(personal) {
    const nuevoPersonal = new Model(personal)
    return nuevoPersonal.save()
}

async function listarPersonal(filterPersonal) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filterPersonal !== null) {
            filter = { personal: filterPersonal }
        }
        Model.find(filter)
            .populate('personal')
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
    add: crearPersonal,
    list: listarPersonal,
}