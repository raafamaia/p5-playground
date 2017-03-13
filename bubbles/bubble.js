function Bubble(x, y){
    this.x = x;
    this.y = y;
    this.diameter = 25;
    this.radius = this.diameter / 2;
    this.lifespan = 255;
    this.col = function(){
        return color(255, 255, 255, this.lifespan);
    };
    
    
    this.setStyle = function(){
        console.log(this.col());
        fill(this.col());
        //strokeWeight(4);
        //stroke(255);    
    };
    
    this.display = function(){
        this.setStyle();
        ellipse(this.x, this.y, this.diameter);
    };
    
    this.update = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifespan = this.lifespan -1;
    };
    
    this.isFinished = function(){
        return (this.lifespan < 0) ? true : false;
    }
    
    this.clicked = function()
    {   
        if(dist(this.x, this.y, mouseX, mouseY) < this.radius){
            this.col = color(255, 0, 200);    
        }   
    }
    
}