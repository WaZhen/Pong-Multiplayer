// Requiero la libreria express
var express = require('express');
var MongoClient = require('mongodb').MongoClient
	  , assert = require('assert');
var url = 'mongodb://localhost:27017/juego';
var cors = require('express-cors');
// La variable app es una instancia de express
var app = new express();
app.use(cors());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
// Tomar lo que tengo en la raiz, y si es la raiz, en ese caso, envio un mensaje
app.get('/', function (req, res) {
	// MONGO//////////////////////////////
	
	
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	   insertPosiciones(db,req.query['nombre'],req.query['posx'],req.query['posy'],req.query['posz'], function() {
			db.close();
		});
		
	 
	});
	
	// Este es el mensaje que envio
  res.send('SE he insertado correctamente');
});

app.get('/dime', function (req, res) {
	
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	  // Carga inicial de posiciones de jugadores
		findAllDocuments(db, function(docs) {
			db.close();
			res.json(docs);
		});
	  //db.close();
	});
	//res.send('Te lo digo');
})
// Arranco el servidor en el puerto 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var findAllDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    //console.log(docs)
	//res.send(docs)
    callback(docs);
  });
}

var insertPosiciones = function(db,minombre,miposx,miposy,miposz,callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {nombre:minombre,posx : miposx,posy:miposy,posz:miposz}
  ], function(err, result) {
    assert.equal(err, null);
    
    callback(result);
  });
}