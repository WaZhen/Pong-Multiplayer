var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar, manejador){
	function arrancaServidor(requiere,respuesta){
		// la variable ruta es el contenido de la URL
		var ruta = url.parse(requiere.url).pathname;
		
		// Escribo algo en la consola
		console.log("Alguien se ha conectado");
		// El contenido es lo que nos da el enrutador
		var contenido = enrutar(manejador,ruta,requiere);
		// Abre el archivo txt en modo añadir y escribe el texto de la pagina en la que estas
		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
		registro.write(ruta + '\n')		
		// Escribe la cabecera del archivo
		respuesta.writeHead(200,{"Content-Type":"text/html"});
		// Escribe el contenido (pero que es el contenido?)
		respuesta.write(contenido);
		// Finaliza la respuesta
		respuesta.end();
	}
	// 
	servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar = iniciar;

