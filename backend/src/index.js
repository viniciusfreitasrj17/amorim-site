const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'test'
})

const table = 'pessoas';

app.get('/', (req, res) => {

  con.query(
    "SELECT * FROM " + table,
    (err, result, fields) => {
      if (err) throw err;
      res.send(result);
    }
  );
});


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes)

app.listen(3333, () => console.log('Listen in 3333'));
