const mysql = require('mysql');

module.exports = {
  con: mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'test'
  }),
  
  table: 'pessoas'
}