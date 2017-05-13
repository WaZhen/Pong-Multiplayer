var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'toguapo',
  password : 'toguapo',
  database : 'toguapo'
});
 
connection.connect();
 
connection.query('INSERT INTO usuarios VALUES(NULL,"JoseVicente","Carratala")', function (error, results, fields) {
  if (error) throw error;
  console.log("insertado")
});
 
connection.end();