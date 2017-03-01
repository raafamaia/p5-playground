var r = 0;
var b = 255;
var g = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    noCursor();
    //backgronud
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    g = map(mouseY, 0, 400, 0, 255);

    background(r, g, b);

    noStroke();
    fill(b, r, g);
    ellipse(mouseX, mouseY, 30, 30);
}
