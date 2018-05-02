const express = require('express')


const { Model } = require('objection')

const ejs = require('ejs')

const connectToDatabase = require ('./src/database/dbConnect')
const knexFile = require('./knexfile')

const apiRouter = require('./src/routers/apiRouter')
const pageRouter = require('./src/routers/pageRouter')

const app = express()

const appConnectionWithDatabase = connectToDatabase(knexFile.development)

Model.knex(appConnectionWithDatabase)

app.locals.db = appConnectionWithDatabase


app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)
app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)

app.use('/api', apiRouter)
app.get('/', function(req, res){
    res.send('home page')
})

app.use(function( req, res){
	res.render('404.ejs')
})



const PORT = process.env.PORT || 3000;app.listen(PORT, function(){
    console.log(`App running in PORT: ${PORT}`)
})