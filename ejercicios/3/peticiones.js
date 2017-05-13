var url = require('url');

function inicio(){
	console.log("Has entrado en la pagina de inicio");
	return "Si estas viendo esto, es que se esta llamando a la pagina de inicio";
}

function pagina1(){
	console.log("Has entrado en la página número 1");
	var fecha = new Date();
	var dia = fecha.getDate();
	return "<h1>P&aacute;gina 1, y hoy es "+dia+"</h1>";
}

function pagina2(requiere){
	// Ahora cojo el parametro
	var url2 = url.parse(requiere.url,true);
	var parametro = url2.query.edad;
	console.log(parametro)
	console.log("Has entrado en la página número 2");
	return "Página 2 y el doble de la edad es: "+(parametro*2);
}

function favicon(){
	console.log("Se ha pedido el favicon");
	return "";
}


exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;
