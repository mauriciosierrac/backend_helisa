const store = require('./store')

function crearPersonal(name, edad, direccion, telefono, profesion, especialidad){
    return Promise.reject((resolve, reject) => {
        if (!name || !profesion){
            console.error('[PersonalError] no ingreso datos exigidos')
            reject('Los datos son incorrectos')
            return false
        }
        const datosPersonal = {
            name: name,
            edad: edad,
            direccion: direccion,
            telefono: telefono,
            profesion: profesion,
            especialidad: especialidad,
            date: new Date(),
        }
        store.add(datosPersonal)
        resolve(datosPersonal)
    })

}



function listarPersonal(filterPersonal){
    return new Promise((resolve, reject) =>{
        resolve(store.list(filterPersonal))
    })
}



module.exports = {
    crearPersonal,
    listarPersonal,
}