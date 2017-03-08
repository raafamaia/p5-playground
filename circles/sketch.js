var offset = 0;

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() 
{
    background(random(255), random(255), random(255));
    
    strokeWeight(4);
    stroke(255);
    
    for(var x = 0; x <= width; x+= 50)
    {
        for(var y = 0; y <= height; y += 50){
            fill(random(255), random(255), random(255));
            ellipse(x, y, 25, 25);
        }
    }
    
    offset += 1;
}
