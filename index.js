var mysql = require('mysql')
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
connection.query('SELECT * FROM prices', function(error, results, fields) {
    if (error) throw error;
    for (var n in results) {
        console.log(results[n])
    }
});



connection.end();