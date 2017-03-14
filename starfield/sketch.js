var stars = [];
var speed;

function setup() {
    createCanvas(800, 800);
    
    for(var x = 0; x < 400; x++){
        stars.push(new Star());
    }
}

function draw() {
    background(0);
    speed = map(mouseX, 0, width, 0, 40);
    
    translate(width / 2, height / 2)
    
    for(let star of stars){
        star.update();
        star.show();
    }
}
