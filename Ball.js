class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 5;
        this.d = this.r * 2;
        this.xspeed = 5;
        this.yspeed = 5;

        this.reset();
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    show() {
        fill(255, 0, 0, 150);
        noStroke();
        ellipse(this.x, this.y, this.d, this.d);
    }

    checkWalls() {
        if (this.x > width || this.x < 0) {
            this.xspeed = -this.xspeed;
        }
        if (this.y < 0) {
            this.yspeed = -this.yspeed;
        }
        if (this.y - this.r > height) {
            this.reset();
        }
    }
    checkObstacle(obstacle) {

        this.hitTop = false;
        this.hitRight = false;
        this.hitLeft = false;
        if (this.y - this.r < obstacle.y + obstacle.height / 2 &&
            this.y + this.r > obstacle.y - obstacle.height / 2 &&
            this.x - this.r < obstacle.x + obstacle.width / 2) {
            if (this.x > obstacle.x) {
                this.hitRight = true;
                console.log("Right");
            }
        }

        if (this.y - this.r < obstacle.y + obstacle.height / 2 &&
            this.y + this.r > obstacle.y - obstacle.height / 2 &&
            this.x + this.r > obstacle.x - obstacle.width / 2) {
            if (this.x < obstacle.x) {
                this.hitLeft = true;
                this.verifyInside(obstacle);
                console.log("Left");
            }
        }
        if (this.y + this.r > obstacle.y - obstacle.height / 2 &&
            this.y < obstacle.y + obstacle.height / 2 &&
            this.x > obstacle.x - obstacle.width / 2 &&
            this.x < obstacle.x + obstacle.width / 2) {
            this.hitTop = true;
            this.verifyInside(obstacle);

            console.log("Top");
        }
        if (this.hitTop) {
            this.yspeed = -this.yspeed;
        }
        else if (this.hitLeft || this.hitRight) {
            this.xspeed = -this.xspeed;
        }
    }
    checkBlock(block) {
        let distance = dist(this.x, this.y, block.x, block.y);
        if (distance < this.r + block.r) {
            this.yspeed = -this.yspeed;
            return true;
        } else {
            return false;
        }
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        let angle = random(0, PI);
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
    }

    verifyInside(obstacle) {

        if (this.y + this.r >= obstacle.y - obstacle.height / 2 && this.y - this.r <= obstacle.y + obstacle.height / 2 &&
            this.x + this.r >= obstacle.x - obstacle.width / 2 && this.x - this.r <= obstacle.x + obstacle.width / 2) {
            if (this.hitLeft) {
                this.y -= 3 * this.d;
                console.log("trama1");
            } else if (this.hitLeft) {
                this.y -= 3 * this.d;
                console.log("trama2");
            }
        }
    }
}