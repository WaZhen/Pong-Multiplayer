// Requiero la libreria express
var express = require('express');
// La variable app es una instancia de express
var app = new express();
// Tomar lo que tengo en la raiz, y si es la raiz, en ese caso, envio un mensaje
app.get('/', function (req, res) {
	// Este es el mensaje que envio
  res.send('Hello World!'+req.query['mivariable']);
});
// Arranco el servidor en el puerto 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
