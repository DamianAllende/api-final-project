const Router = require('express').Router;
const apiRouter = Router()

const Usuarios = require('../models/Username')
const Puestos = require('../models/Puesto')
const Sucursal = require('../models/Sucursal')
const Ventas = require('../models/Ventas')
const Productos = require('../models/Productos')
const Clientes = require('../models/Clientes')


function isUserAuthenticated(req, res, next) {
  if(req.user){
    next()
  }else{
    res.json({
      error: 'Private rute'
    })
  }
}


function allVentas (req, res){
  Ventas
    .query()
    //.eager('username')
    .then(function(data) {
      res.json(data)
    })
}

function createNewVenta(req, res){
  Ventas
    .query()
    .insert(req.body) //INSERT INTO
    .then(function(newVenta){
      res.json(newVenta).status(200)
      console.log('Venta save...')
    })
}


function getSingleVenta (req, res){
  const ventaId  = parseInt(req.params.ventaId)

  Ventas
    .query()
    .findById(ventaId)
    .then(function(venta){
      res.json(venta).status(200)
    })
}


function updateVenta(req, res){
  const ventaId = parseInt(req.params.ventaId)
  const newData = req.body

  Ventas
    .query()
    .updateAndFetchById(ventaId, newData)
    .then(function(ventaUpdated) {
      res.json(ventaUpdated).status(200)
    })
}



function allProductos (req, res){
  Productos
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function createNewProducto(req, res){
  Productos
    .query()
    .insert(req.body) //INSERT INTO
    .then(function(newProducto){
      res.json(newProducto).status(200)
      console.log('Producto save...')
    })
}

function allClientes (req, res){
  Clientes
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function createNewCliente(req, res){
  Clientes
    .query()
    .insert(req.body) //INSERT INTO
    .then(function(newCliente){
      res.json(newCliente).status(200)
      console.log('Cliente save...')
    })
}


function allPuestos (req, res){
  Puestos
    .query()
    .eager('username')
    .then(function(data) {
      res.json(data)
    })
}

function allSucursal (req, res){
  Sucursal
    .query()
    .eager('username')
    .then(function(data) {
      res.json(data)
    })
}


function allUsuarios(req, res){
  Usuarios
    .query()
    .then(function(data) {
      res.json(data)
    })
}


apiRouter
  .get('/ventas', allVentas)
  .post('/ventas', createNewVenta)
  .get('/ventas/:ventaId', getSingleVenta)
  .put('/ventas/:ventaId', updateVenta)
  .get('/productos', allProductos)
  .post('/productos', createNewProducto)
  .get('/clientes', allClientes)
  .post('/clientes', createNewCliente)
  .get('/puestos', allPuestos)
  .get('/sucursal', allSucursal)
  .get('/usuarios', allUsuarios)




module.exports = apiRouter