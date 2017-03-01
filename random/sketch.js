var p = {
    x: 40,
    y: 60
};

var col = {
    r: 255,
    g: 0,
    b: 0,
    opacity: 0
};

function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    noStroke();

    p.x = random(0, width);
    p.y = random(0, height);

    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    col.opacity = random(0, 100);

    fill(col.r, col.g, col.b, col.opacity);
    ellipse(p.x, p.y, 24, 24);
}
