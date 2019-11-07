let express = require('express')
let app = express()

// Middleware: takes care of the request
app.use('/home', function(req, res, next) {
    res.end("Nice!")
})

app.use(function(req, res, next) {
    throw {error:`Cannot find ${req.url}`}
})

app.use(function(err,req, res, next) {
    res.end(err.error)
})

app.listen(8080, '0.0.0.0')