const Router = require('express').Router;
const apiRouter = Router()

const Usuarios = require('../models/Username')
const Puestos = require('../models/Puesto')
const Sucursal = require('../models/Sucursal')
const Ventas = require('../models/Ventas')
const Productos = require('../models/Productos')
const Clientes = require('../models/Clientes')


apiRouter.get('/ventas', function(req, res) {
  Ventas
    .query()
    //.eager('username')
    .then(function(data) {
      res.json(data)
    })
})


apiRouter.get('/productos', function(req, res) {
  Productos
    .query()
    //.eager('username')
    .then(function(data) {
      res.json(data)
    })
})



apiRouter.get('/clientes', function(req, res) {
  Clientes
    .query()
    //.eager('username')
    .then(function(data) {
      res.json(data)
    })
})





apiRouter.get('/puestos', function(req, res) {
  Puestos
    .query()
    .eager('username')
    .then(function(data) {
      res.json(data)
    })
})





apiRouter.get('/sucursal', function(req, res) {
  Sucursal
    .query()
    .eager('username')
    .then(function(data) {
      res.json(data)
    })
})




apiRouter.get('/usuarios', function(req, res){
	const db = req.app.locals.db

	db
		.select()
		.table('username')
		.then(function(data) {
			res.json(data)
		})
});


module.exports = apiRouter