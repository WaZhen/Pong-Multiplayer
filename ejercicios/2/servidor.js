var servidor = require('http');

function arrancaServidor(requiere,respuesta){
	console.log("Este mensaje va a ir directamente a la consola");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("<h1>Si estas leyendo esto, es que te lo da node</h1>");
	respuesta.end();
}

servidor.createServer(arrancaServidor).listen(80);