const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
         host:'172.17.0.1',
         user:'root',
         password:'manager',
         database:'myapp',
         port:8888
    })

    connection.connect()
    return connection
}

module.exports = {
    connect:connect
}