function Message(word, x, y){
    this.x = x;
    this.y = y;
    
    this.setStyle = function(){
        textSize(20);
        fill(255, 255, 255, 90);
    };
    
    this.display = function(){
        this.setStyle();
        text(word, this.x, this.y, this.radius);
    };
    
    this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    };
    
}