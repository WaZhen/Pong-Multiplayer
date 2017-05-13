var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/juego';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  // Carga inicial de posiciones de jugadores
	insertPosiciones(db, function() {
		db.close();
	});
  db.close();
});
// Funcion de insercion de posiciones de jugadores
var insertPosiciones = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {nombre:"david",posx : "1",posy:"2",posz:"3"}, {nombre:"ivan",posx : "1",posy:"20",posz:"13"}, {nombre:"jose",posx : "10",posy:"20",posz:"30"}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}