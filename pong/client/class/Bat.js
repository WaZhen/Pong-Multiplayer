var bats = [];

function updateBats() {
    for (var palo in bats) {
        bats[palo].update();
        bats[palo].render();
    }
}

var Bat = function(name, x, y, turn) {
    var scope = this;
    this.x = x;
    this.y = y;
    this.turn = turn;
    this.width = 50;
    this.height = 10;
    this.name = name;
    this.aceleration = 0.2;
    this.speed = 0;
    this.maxSpeed = 5;
    this.movingLeft = false;
    this.movingRight = false;

    this.update = function() {
        if(this.movingLeft) {
            this.moveLeft();
        } else 
        if(this.movingRight) {
            this.moveRight();
        }
        else{
            this.break();
        }
        this.x += scope.speed;
    }

    this.render = function() {

        ctx.fillText(this.name, this.x, this.y - 5);
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    this.moveLeft = function() {
        if(this.speed > -this.maxSpeed) {
            this.speed -= this.aceleration;

        }
    }

    this.moveRight = function() {
        if(this.speed < this.maxSpeed){
            this.speed += this.aceleration;

        }
    }
    this.break = function() {
        if(this.speed > this.aceleration){
            this.speed -= this.aceleration;
            return;
        }else 
        if(this.speed < -this.aceleration) {
            this.speed += this.aceleration;
            return;
        }else{
            this.speed = 0;
        }
    }
}

function switchTurns() {
    for (var palo in bats) {
        bats[palo].turn = !bats[palo.turn];
    }
}