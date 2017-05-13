function enrutar(manejador,ruta,requiere){
	// Saca un mensaje por consola
	console.log("Voy a rutear algo para "+ruta);
	// Si lo que va a enrutar es una funcion
	if(typeof manejador[ruta] === 'function'){
		// Devuelve el manejador
		return manejador[ruta](requiere);
	}else{
		// Da un mensaje de errror
		console.log("No existe una función para esa ruta: "+ruta);
	}
}
// Devuelve la ruta
exports.enrutar = enrutar;
