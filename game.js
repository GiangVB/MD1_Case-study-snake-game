let snake;
let apple;
function setup() {
    createCanvas(WIDTH, HEIGHT);
    textSize(15)
    newGame();
}

function draw() {
    background(0);
    text('Score: ' + snake.length, 530, 10, 70, 80)
    if(!snake.isDead){
        drawSnake();
    } else {
        newGame()
    }
}

function drawSnake() {
    snake.show();
    apple.show();
    if (frameCount % SNAKE_SPEED == 0) {
        snake.update();
    }
    if(snake.head.x == apple.x && snake.head.y == apple.y){
        eatApple();
    }
}

function newGame() {
    snake = new Snake();
    apple = new Apple();
}

function eatApple() {
    snake.length++;
    apple.newApple();
}

function keyPressed(event) {
    if (event.keyCode == 38 && snake.vel.y != 1) {
        snake.vel.y = -1;
        snake.vel.x = 0;
    } else if (event.keyCode == 40 && snake.vel.y != -1) {
        snake.vel.y = 1;
        snake.vel.x = 0;
    }  else if (event.keyCode == 37 && snake.vel.x != 1) {
        snake.vel.y = 0;
        snake.vel.x = -1;
    } else if (event.keyCode == 39 && snake.vel.x != -1) {
        snake.vel.y = 0;
        snake.vel.x = 1;
    }
}

//keyPressed(event)