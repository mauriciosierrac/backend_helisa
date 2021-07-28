const express = require('express')
const citas = require('../components/citas/network')
const especialidad = require('../components/especialidad/network')
const paciente = require('../components/paciente/network')
const personal = require('../components/personal/network')
const profesion = require('../components/profesion/network')


const routes = function (server) {
    server.use('/citas', citas)
    server.use('/especialidad', especialidad)
    server.use('/paciente', paciente)
    server.use('/personal', personal)
    server.use('/profesion', profesion)
}

module.exports = routes