var value = 50;

function setup() {
    createCanvas(600, 400);
    background(value);
}

function draw() {
    fill(300, 100, 100, 90);
    noStroke();
    ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed() {
  background(value);
  value = (value == 50) ? 255: 50;
}
