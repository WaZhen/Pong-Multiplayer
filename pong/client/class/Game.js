var temporizador = null;
var canvas = null;
var ctx = null;
var miInput = null;
var pelota = null;
$(document).ready(function() {
  
    init();

})

function init() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    width = $("#contenedor").width();
    height = $("#contenedor").height();
    canvas.width = width;
    canvas.height = height;
    $("#contieneMenu").width(width/2);
    $("#contieneMenu").height(height/2);
    $("#contieneMenu").css("top",height/4);
    $("#contieneMenu").css("left",width/4);

    miInput = new Input();
    miInput.listen();
    bats.push(new Bat("default", width/2 , height - 30, false));
    bats.push(new Bat("default", width/2 , 20, true));
    pelota = new Ball(width/2, height/2);

    $("#botonJugar").on('click',function() {

        if($("#inputNombre").val().length > 3) {
            var miNombre = $("#inputNombre").val();
            jugador = new Player(miNombre);
            for(var palo in bats) {
                miInput.playerName = miNombre;
                if(bats[palo].name = "default") {
                    bats[palo].name = miNombre;
                    jugador.controlled = bats[palo];
                    miInput.controlled = bats[palo];

                }
                break;
            }
            $("#contieneMenu").fadeOut();
        } else {
            document.write("introduce un nombre valido");
        }

    });

    temporizador = setTimeout(loop,0);

}

function loop() {

    ctx.clearRect(0, 0, width, height);
    updateBats();
    pelota.update();
    pelota.render();
    clearTimeout(temporizador);
    temporizador = setTimeout(loop, 33);

}