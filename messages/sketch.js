var messages = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);
    
    if(messages.length > 50){
        messages.splice(0, 1);
    }
    
    for(let message of messages){
        message.move();
        message.display();
    }
}

function mousePressed(){
    messages.push(new Message("teste", mouseX, mouseY));
}


