const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', function(req, res) {
    controller.crearPersonal(req.body.name, req.body.edad, req.body.direccion, req.body.telefono, req.body.profesion, req.body.especialidad)
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(err => {
        response.error(req, res, 'Internal Error', 500, err)
    })
})

router.get('/', function(req, res){
    controller.listarPersonal()
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(err =>{
        response.error(req, res, 'Internal Error', 500, err)
    })
})

module.exports = router