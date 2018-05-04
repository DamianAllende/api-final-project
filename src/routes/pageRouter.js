const Router = require('express').Router;
const pageRouter = Router()

pageRouter.get('/', (req, res) => {
	res.render('home.ejs')
})


module.exports = pageRouter