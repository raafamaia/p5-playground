var drawCount;

var circle1 = {
    size: 30,
    y: -15,
    x: 300
};

function setup() {
    drawCount = 0;
    
    createCanvas(600, 400);
    background(255);
}

function draw() {
    background(0);
    fill(300, 100, 100);
    stroke(0);
    
    if(circle1.again && circle1.y >= 415) {
        circle1.again = circle1.again ? false : true;
        circle1.y = -15;
        circle1.size = 30;
    }else if(!circle1.again && circle1.y >= 480){
        circle1.y = -15;
        circle1.again = circle1.again ? false : true;
        circle1.size = 129;
    }
    
    if(circle1.again) {
        circle1.size = circle1.size - 1;
    }else{
        circle1.size = circle1.size + 1;
    }
    
    ellipse(circle1.x, circle1.y, circle1.size, circle1.size);
    circle1.y = circle1.y + 5;
    
    drawCount = drawCount + 1;

}
