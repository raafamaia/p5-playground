var bubbles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    
    for(var i = 0; i < 10; i++){
        bubbles.push(new Bubble(random(0, window.innerWidth), random(0, window.innerHeight)));
    }
}

function draw() {
    background(0);
    
    if(bubbles.length > 50){
        bubbles.splice(0, 1);
    }
    
    for(let bubble of bubbles){
        bubble.update();
        bubble.display();
        
        //remove dead bubbles -- ECMAScript6
        if(bubble.isFinished()) {
            bubbles = bubbles.filter(item => item !== bubble);
        }
    }
}

function mousePressed(){
    
//    for(let bubble of bubbles){
//        bubble.clicked();
//    }
    
    bubbles.push(new Bubble(mouseX, mouseY));
}

//function mouseDragged(){
//    bubbles.push(new Bubble(mouseX, mouseY));
//}


