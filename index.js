let express = require('express')
let app = express()
let morgan = require('morgan')

app.use(morgan('combined'))

// Middleware: takes care of the request
app.use('/home', function(req, res, next) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.send("<html><body><p>Welcome</p></body></html>")
    res.end()
})

app.use('/about', function(req, res, next) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.send(JSON.stringify({ message: "I'm from the moon!!" }))
    res.end()
})

app.use(function(req, res, next) {
    throw {error:`Cannot find ${req.url}`}
})

app.use(function(err,req, res, next) {
    res.end(err.error)
})

module.exports = app