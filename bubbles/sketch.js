var bubbles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);
    
    if(bubbles.length > 50){
        bubbles.splice(0, 1);
    }
    
    for(let bubble of bubbles){
        bubble.move();
        bubble.display();
    }
}

function mousePressed(){
    bubbles.push(new Bubble(mouseX, mouseY));
}

function mouseDragged(){
    bubbles.push(new Bubble(mouseX, mouseY));
}


