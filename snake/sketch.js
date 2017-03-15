var snake;
var food;
var scl;
var imgHead;
var imgBody;
var imgFood;

function preload(){
    //imgHead = loadImage("assets/head.jpg");
    //imgFood = loadImage("assets/cupcake.png");
    
    //Luiggi Version
    imgHead = loadImage("assets/luiggi/luiggi.png");
    imgBody = loadImage("assets/luiggi/yoshi.png");
    imgFood = loadImage("assets/luiggi/mush.ico");
    
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    
    scl = 60;
    speed = 2;
    
    snake = new Snake(scl, imgHead, imgBody);
    
    food = new Food(scl, imgFood);
    food.pickLocation();
    
    frameRate(5);
}

function draw() {
    background(0);
    
    if(snake.eat(food)){
        food.pickLocation();    
    }
    
    food.show();
    
    snake.death();
    snake.update();
    snake.show();
}

function keyPressed(){
    
    switch (keyCode) {
        case UP_ARROW:
            snake.dir(0, -1);
            break;
        case DOWN_ARROW:
            snake.dir(0, 1);
            break;
        case LEFT_ARROW:
            snake.dir(-1, 0);
            break;
        case RIGHT_ARROW:
            snake.dir(1, 0);
            break;
        default:
            // code
            break;
    }
}
