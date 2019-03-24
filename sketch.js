let ball;
let ship;
let blockCols = 5;
let blockRows = 4;
let blockNum = blockRows + blockRows;
let blocks = [];

function setup() {
    canvas = createCanvas(600, 400);
    ball = new Ball(width / 2, height / 2);
    ship = new Ship(width / 2, height - 30);
    let xspacing = width / 1.2 / blockCols;
    let yspacing = height / 10 / blockRows;

    for (let i = 0; i < blockCols; i++) {
        for (let j = 0; j < blockRows; j++) {
            blocks[i + j * blockCols] = new Block(xspacing * i + xspacing, yspacing * j * blockCols + yspacing);
        }
    }
}

function draw() {
    background(0);
    ball.checkWalls();
    
    ship.show();

    ship.move();
    ball.update();
    ball.checkObstacle(ship);
    ball.show();


    for (let i = 0; i < blocks.length; i++) {
        blocks[i].show();
        if (ball.checkBlock(blocks[i])) {
            blocks[i].destroy();
        }
    }

    for (var i = blocks.length - 1; i >= 0; i--) {
        if (blocks[i].toDestroy) {
            blocks.splice(i, 1);
        }
    }
}



// function mousePressed() {
//     ball.xspeed = 0;
//     ball.yspeed = 0;
// }

function keyPressed() {
    if ((key == 'a') || (key == 'A')) {
        ship.setDir(-1);
    } else if ((key == 'd') || (key == 'D')) {
        ship.setDir(1);
    }
}

function keyReleased() {
    if ((key == 'a') || (key == 'A') || (key == 'd') || (key == 'D')) {
        ship.setDir(0);
    }
}