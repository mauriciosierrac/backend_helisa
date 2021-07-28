const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', function(req, res) {
    controller.crearCita(req.body.paciente, req.body.atendidoPor, req.body.ProcedimientoRealizado)
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(err => {
        response.error(req, res, 'Internal Error', 500, err)
    })
})

router.get('/', function(req, res){
    controller.listarCita()    
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(err =>{
        response.error(req, res, 'Internal Error', 500, err)
    })
})

module.exports = router