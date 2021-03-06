var Snake = function(scl, imgHead, imgBody){
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 0;
    this.col = color(255);
    this.scl = scl;
    this.imgHead = imgHead;
    this.imgBody = imgBody;
    this.total = 0;
    this.tail = [];
    
    this.death = function(){
        for(var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 30){
                this.x = 0;
                this.y = 0;
                this.total = 0;
                this.tail = [];
            }
        }
    }
    
    this.update = function(){
        
        
        if(this.total === this.tail.length){
            for(var i = 0; i < this.tail.length - 1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);
        
        var nextX = this.x + (this.speedX * this.scl);
        var nextY = this.y + (this.speedY * this.scl);
        
        var constX = constrain(nextX, 0, floor(width - this.scl));
        var constY = constrain(nextY, 0, floor(height - this.scl));
        
        var rows = floor(width / this.scl);
        var cols = floor(height / this.scl);
        
        if(nextX < 0){
            this.x = rows * this.scl;
        } else if(!(nextX < width && nextX > width - this.scl) && nextX >= 0) {
            this.x = nextX;
        } else {
            this.x = 0;
        }
        
        if(nextY < 0){
            this.y = cols * this.scl;
        } else if(!(nextY < height && nextY > height - this.scl) && nextY >= 0) {
            this.y = nextY;
        } else {
            this.y = 0;
        }
    };
    
    this.show = function(){
        
        //noFill();
        //strokeWeight(1);
        //stroke(255);
        
        //fill(this.col);
        
        for(var i = 0; i < this.tail.length; i++){
            //rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
            image(this.imgBody, this.tail[i].x, this.tail[i].y, this.scl, this.scl);
        }
        
        //rect(this.x, this.y, this.scl, this.scl);
        image(this.imgHead, this.x, this.y, this.scl, this.scl);
    };
    
    this.dir = function(x, y){
        this.speedX = x;
        this.speedY = y;
    };
    
    this.eat = function(food){
        
        var d = dist(this.x, this.y, food.x, food.y);
        
        if(d < this.scl){
            this.total += 1;
            return true;
        }
        
        return false;
    };
}