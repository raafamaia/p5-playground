var ball = {
    x: 300,
    y: 200,
    speedX: 3,
    speedY: -2,
    size: 50
};

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);

    bounce()
    move()
    display()
}

function move() {
    ball.x = ball.x + ball.speedX;
    ball.y = ball.y + ball.speedY; 
}

function bounce() {
    
    if(ball.x > width - 25 || ball.x < 25) {
        ball.speedX = ball.speedX * -1;
    }
    
    if(ball.y > height - 25 || ball.y < 25){
        ball.speedY = ball.speedY * -1;
    }
    
}

function display() {
    stroke(255);
    strokeWeight(5);
    noFill();
    ellipse(ball.x, ball.y, ball.size);
}

function mousePressed()
{
    ball.speedX += 10;   
}
