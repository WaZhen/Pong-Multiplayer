// Arranca el archivo servidor, que es un servidor vacio
var servidor = require("./servidor");
// El enrutador es el encargado de escuchar la URL
var enrutador = require("./enrutador");
// Las peticiones guardan todas las rutas posibles que se pueden pedir en la URL
var peticiones = require("./peticiones");
// Definimos manejador como una coleccion
var manejador = {}
// Cuando este en la raiz, ejecuto inicio
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;
manejador['/favicon.ico'] = peticiones.favicon;
manejador['/juego'] = peticiones.juego;

servidor.iniciar(enrutador.enrutar, manejador);
