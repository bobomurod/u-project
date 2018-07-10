var mysql = require('mysql')
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes.js')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true} ))
routes(app)

var server = app.listen(3999, function() {
    console.log('Server runnin on ', server.address().port)
})




var connection = mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   '',
    database    :   'test'
})

connection.connect(function(err) {
    if (err) {
        console.error('error connection', err.stack)
        return
    }
    console.log('Client connected', connection.threadId)
})


function price() {
    connection.query('SELECT * FROM prices ORDER BY ID DESC LIMIT 1', function(error, results, fields) {
    if (error) throw error;
    for (var n in results) {
        return(results[n])
    }
});
}


connection.end();