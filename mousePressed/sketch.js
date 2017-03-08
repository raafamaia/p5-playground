var on = false;

function setup()
{
    createCanvas(600, 400);
}

function draw()
{
    background(0);
    
    noFill();
    strokeWeight(4);
    stroke(255);
    
    if(on)
    {
        fill(0, 255, 0);
    }
    else
    {
        fill(0);
    }
    
    rectMode(CENTER);
    rect(300, 200, 100, 100);
}

function mousePressed()
{
    if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250)
    {
        on = !on
    }
}
