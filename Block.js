class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 15;
        this.d = this.r * 2;
        this.toDestroy = false;
    }

    show() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.d, this.d);
    }

    destroy(){
        this.toDestroy = true;
    }
}