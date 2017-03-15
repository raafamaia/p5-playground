var Circle = function(x, y, d) {
    this.x = x;
    this.y = y;
    this.col = color(255);
    this.diameter = d;
    this.radius = this.diameter / 2
    
    this.display = function(){
        fill(this.col);
        ellipse(this.x, this.y, this.diameter);
    }
    
    this.update = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
    
    this.intersect = function(bubble){
        var d = dist(this.x, this.y, bubble.x, bubble.y);
        
        return (d < bubble.radius + this.radius)
    }
    
    this.changeColor = function(){
        this.col = color(random(255), random(255), random(255));
    }
}