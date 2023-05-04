const mysql = require('mysql')

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'practice',
    password : ''
})

module.exports = conn