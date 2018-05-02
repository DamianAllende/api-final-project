const Router = require('express').Router;
const apiRouter = Router()

apiRouter.get('/ventas', (req, res) => {
	res.send('api Router home')
})



apiRouter.get('/puestos', function(req, res){
	const db = req.app.locals.db

	db
		.select()
		.table('puesto')
		.then(function(data) {
			res.json(data)
		})
});


apiRouter.get('/sucursal', function(req, res){
	const db = req.app.locals.db

	db
		.select()
		.table('sucursal')
		.then(function(data) {
			res.json(data)
		})
});

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