function Bubble(x, y){
    this.x = x;
    this.y = y;
    this.radius = 25;
    
    this.setStyle = function(){
        fill(255, 255, 255, 90);
        strokeWeight(4);
        stroke(255);    
    };
    
    this.display = function(){
        this.setStyle();
        ellipse(this.x, this.y, this.radius);
    };
    
    this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    };
    
}