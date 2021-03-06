var messages = [];
var phrases = [["MANDA", "NUDES"], ["COMO", "VAI", "VOSE", "CHEROSA?"], ["OI", "VAMO", "BEJA?"], ["CASA", "COM", "MIGO?"]];
// var phrases = [["CASA", "COM", "MIGO?"]];

var currentPhrase = [];
var currentIndexPhrase = 0;
var currentIndexWord = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    currentPhrase = phrases[0];
}

function draw() {
    background(0);
    title();
    
    for(var index = 0; index < messages.length; index++){
    //for(let message of messages){
        // Gravity is scaled by mass here!
        var gravity = createVector(0, 0.1 * messages[index].mass);
        // Apply gravity
        messages[index].applyForce(gravity);

        // Update and display
        messages[index].update();
        messages[index].display();
        messages[index].checkEdges();
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
    
    messages.push(new Message(currentPhrase[currentIndexWord], random(3, 8), mouseX, mouseY));
    
    currentIndexWord += 1;
}

function reset(){
     messages=[];
}

function title(){
    textSize(40);
    fill(255);
    noStroke();
    text("CLICK TO SEE MESSAGES", window.innerWidth / 4, 30)
}


