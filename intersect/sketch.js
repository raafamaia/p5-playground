items = [];
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    
}

function draw() {
    background(0);

    items.forEach(
        function(item, index)
        {
    
            for(var x = index + 1; x < items.length; x++)
            {
                if(item.intersect(items[x]))
                {
                    item.changeColor();
                    items[x].changeColor();
                }
            }
    
        }
    );


    for(let item of items){
        item.update();
        item.display();
        
        
    }
}

function mousePressed() {
    items.push(new Circle(mouseX, mouseY, 50));
}