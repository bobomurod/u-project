var price = require('../models/price.js')
const stringify = require('json-stringify-safe')
var JSON = require('circular-json')


var appRouter = function(app) {
    app.get('/', function (request, response, next) {
        // response.status(200).json(JSON.stringify(price()))
        response.status(200).json(price())
    })
}

module.exports = appRouter
