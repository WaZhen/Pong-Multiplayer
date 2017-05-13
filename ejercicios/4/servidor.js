var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar, manejador){
	function arrancaServidor(requiere,respuesta){
		// La ruta es leer la URL
		var ruta = url.parse(requiere.url).pathname;
		// Si la ruta no llama a ninguna pagina, en ese caso, JOSE,
		// Se entiendo que el archivo por defecto, es index.html
		if(ruta == "/"){
			ruta = "index.html";
		}
		// Saca este mensaje por consola
		console.log("Alguien se ha conectado");
		// El contenido consiste en leer el archivo que esta en la ruta
		var index = fs.readFileSync("www/"+ruta);
		// Es un archivo de registro del servidor
		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
		registro.write(ruta + '\n');	
		// En el navegador escribe el tipo de contenido
		respuesta.writeHead(200,{"Content-Type":"text/html"});
		// Escribe el contenido de la respuesta
		respuesta.write(index);
		// Y cierra
		respuesta.end();
	}
	// Arranca el servidor en el puerto 8080
	servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar = iniciar;

