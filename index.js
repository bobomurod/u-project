var mysql = require('mysql')
var connection = mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   '',
    database    :   'uproject'
})

connection.connect()
connection.query('SELECT * FROM prices', function(error, result, fields) {
    if (error) throw error;
    console.log(result[0].solution)
});



