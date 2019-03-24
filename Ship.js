class Ship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 20;
        this.dir = 0;
        this.step = 5;
    }

    show() {
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height,20);
    }

    setDir(dir) {
        this.dir = dir;
    }

    move() {
        this.x += this.dir * this.step;
        this.x = constrain(this.x, this.width/2, width - this.width/2);
    }
}