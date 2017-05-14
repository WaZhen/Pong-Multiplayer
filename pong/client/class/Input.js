var Input = function () {
    var scope = this;
    this.playerName = null;
    this.controlled = null;
    

    this.setPlayerName = function (name) {
        this.playerName = name;
    }

    this.listen = function() {
        $(document).on('keydown', function(event) {
            var nombre = scope.playerName;
            var controlado = scope.controlled;
            if(nombre != null && controlado != null) {
                if(event.which == 68 || event.which == 39) {
                    if(!controlado.movingLeft) {
                        controlado.movingRight = true;
                    }
                }
                if(event.which == 65 || event.which == 37) {
                    if(!controlado.movingRight) {
                        controlado.movingLeft = true;
                    }
                }
                if(event.which == 32) {
                    if(pelota != null) {
                        if(controlado.turn) {
                            pelota.play = true;
                        }
                    }
                }
        }
        });

        $(document).on('keyup', function(event) {
            var nombre = scope.playerName;
            var controlado = scope.controlled;
            if(nombre != null && controlado != null) {
                if(event.which == 68 || event.which == 39) {
                    controlado.movingRight = false;
                }
                if(event.which == 65 || event.which == 37) {
                    controlado.movingLeft = false;
                }
            }
        });
    }

    
}