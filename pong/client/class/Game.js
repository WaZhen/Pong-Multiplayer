var temporizador = null;
var canvas = null;
var ctx = null;
$(document).ready(function() {

    console.log("he entrado en el archivo.");    
    init();

})

function init() {

    console.log("he entrado en init");
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
    temporizador = setTimeout(loop,0);

}

function loop() {

    console.log("frame");
    ctx.fillRect(10,10,10,10);
    clearTimeout(temporizador);
    temporizador = setTimeout(loop, 33);

}