var mysql = require('mysql')
var stringify = require('json-stringify-safe')
var myQuery = 0

var priceApp = function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
        })
    
        connection.connect(function(err) {
            if (err) {
                console.error('Not connected', err.stack)
            }
            console.log('db connected', connection.threadId)
        })
        connection.query('SELECT * FROM prices ORDER BY ID DESC LIMIT 1', function (error,results,fields) {
            myQuery = results[0]
        })
        connection.end()
        return myQuery
        

}

module.exports = priceApp