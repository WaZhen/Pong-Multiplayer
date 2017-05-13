var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'toguapo',
  password : 'toguapo',
  database : 'toguapo'
});
 
connection.connect();
 
connection.query('SELECT * FROM usuarios', function (error, results, fields) {
  if (error) throw error;
  for(var i = 0;i<results.length;i++){
	  console.log(results[i].nombre); 
  }
 
});
 
connection.end();