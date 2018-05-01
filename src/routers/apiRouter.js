const Router = require('express').Router;
const apiRouter = Router()

apiRouter.get('/ventas', (req, res) => {
	res.send('api Router home')
})


module.exports = apiRouter