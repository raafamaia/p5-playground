var messages = [];
var phrases = [["MANDA", "NUDES"], ["OI", "VAMO", "BEJA?"], ["COMO", "VAI", "VOSE", "CHEROSA?"], ["PAGUE", "SUAS", "APOSTAS", "PARSA"]];

var currentPhrase = [];
var currentIndexPhrase = 0;
var currentIndexWord = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    
    currentPhrase = phrases[0];
}

function draw() {
    background(0);
    
    for(let message of messages){
        // Gravity is scaled by mass here!
        var gravity = createVector(0, 0.1 * message.mass);
        // Apply gravity
        message.applyForce(gravity);

        // Update and display
        message.update();
        message.display();
        message.checkEdges();
    }
}

function mousePressed(){
    
    //Check if the phrase is over
    if(currentIndexWord >= currentPhrase.length) {
        currentIndexPhrase += 1;
        currentPhrase = phrases[currentIndexPhrase];
        currentIndexWord = 0;
        
        reset();
    }
    
    //Check if it's the last phrase
    if(currentIndexPhrase > phrases.length -1){
        currentIndexPhrase = 0;
        currentIndexWord = 0;
        
        currentPhrase = phrases[currentIndexPhrase];
    }
    
    messages.push(new Message(currentPhrase[currentIndexWord], random(0.5, 3), mouseX, mouseY));
    
    currentIndexWord += 1;
}

function reset(){
     messages=[];
}


