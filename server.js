const express = require('express')
const app = express()
const ejs = require('ejs')

const apiRouter = require('./src/routers/apiRouter')

app.use('/api', apiRouter)


app.get('/', function(req, res){
    res.send('home page')
})



const PORT = process.env.PORT || 3000;app.listen(PORT, function(){
    console.log(`App running in PORT: ${PORT}`)
})