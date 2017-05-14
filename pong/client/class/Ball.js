var Ball = function(x,y) {
    this.play = false; // cuando se sque, este parametro se vuelve true
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.angle = - Math.PI/2;
    this.width = 10;
    this.height = 10;
    this.img = new Image();
    this.img.src = "assets/ball.png";

    this.update = function() {
        this.movement();
        this.playerWins();
        this.playerCollision();
        this.wallCollision();
    }

    this.render = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    this.movement = function() {
        console.log("mueve")
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    }

    this.playerWins = function() {
        if(this.y < 0 - this.height) { // player 1 wins
            // cambia jugadores...

            // resetea posiciones
            this.x = width/2;
            this.y = height/2;
            this.play = false;
        }

        if(this.y > height) { // player 2 wins
            // cambia jugadores...

            // resetea posiciones
            this.x = width/2;
            this.y = height/2;
            this.play = false;
        }
    }

    this.playerCollision = function() {
        for(var bat in bats) {
            var player = bats[bat];
            if(this.x + this.width > player.x &&
            this.x  < player.x + player.width &&
            this.y + this.height > player.y &&
            this.y < player.y + player.height) {
                if(player.y > height/2) {
                    this.angle = 3.491 + ((this.x - player.x) / player.width) * 2.443;
                } else {
                    this.angle = 2.793 + ((this.x - player.x) / player.width) * 5.934;
                }
            }
        }
    }

    this.wallCollision = function() {
        if(this.x < 0 || this.x + this.width > width) {
            this.angle *= -1;
            this.angle += Math.PI;
        }
    }

}