const request = require('supertest')
const server = require('../server')

describe('prueba de conexion de la API, solicitudes GET a las collections de la BD en Mongo', () => {
    it('validacion GET de la collection citas', done => {
        request(server)
            .get('/citas')
            .set('Accept', 'application/json')
            .expect(200, done)
    })

    it('validacion GET de la collection especialidad', done => {
        request(server)
            .get('/especialidad')
            .set('Accept', 'application/json')
            .expect(200, done)
    })

    it('validacion GET de la collection paciente', done => {
        request(server)
            .get('/paciente')
            .set('Accept', 'application/json')
            .expect(200, done)
    })

    it('validacion GET de la collection personal', done => {
        request(server)
            .get('/personal')
            .set('Accept', 'application/json')
            .expect(200, done)
    })
    it('validacion GET de la collection profesion', done => {
        request(server)
            .get('/profesion')
            .set('Accept', 'application/json')
            .expect(200, done)
    })
})

describe('prueba de conexion de la API, solicitudes POST a las collections de la BD en Mongo', () => {
    it('Validacion POST de envio de datos a la collection: citas', done => {
        const datos = {
            paciente: "6101c1015366280fd1d6f406",
            atendidoPor: "6101c5d8e8903c1166b8c018",
            procedimientoRealizado: "procedimiento test"
        }
        request(server)
            .post('/citas')
            .send(datos)
            .expect(200, done)
    })
    it('Validacion POST de envio de datos a la collection: especialidad', done => {
        const datos = {
            name: "Cardiocirugia",
            descripcion: "Especialidad de prueba"
        }
        request(server)
            .post('/especialidad')
            .send(datos)
            .expect(200, done)
    })
    it('Validacion POST de envio de datos a la collection: paciente', done => {
        const datos = {
            name: "Usuario de Prueba",
            edad: 18,
            direccion: "direccion de prueba",
            telefono: 3121234567,
            eps: "eps prueba"
        }
        request(server)
            .post('/paciente')
            .send(datos)
            .expect(200, done)
    })
    it('Validacion POST de envio de datos a la collection: personal', done => {
        const datos = {
            name: "Medico Prueba",
            edad: 47,
            direccion: "direccion de prueba",
            telefono: 3101234566,
            profesion: "610196e4172b950957196936",
            especialidad: "61019a58cb734a0a3faed697"
        }
        request(server)
            .post('/personal')
            .send(datos)
            .expect(200, done)
    })
    it('Validacion POST de envio de datos a la collection: profesion', done => {
        const datos = {
            name: "Enfermera General",
            descripcion: "Enfermera de nivel 3"
        }
        request(server)
            .post('/personal')
            .send(datos)
            .expect(200, done)
    })
})