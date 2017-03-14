var Snake = function(scl, img){
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 0;
    this.col = color(255);
    this.scl = scl;
    this.img = img;
    this.total = 0;
    this.tail = [];
    
    this.death = function(){
        for(var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 30){
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
        
        this.x += this.speedX * this.scl;
        this.y += this.speedY * this.scl;
        
        this.x = constrain(this.x, 0, width - this.scl);
        this.y = constrain(this.y, 0, height - this.scl);
    };
    
    this.show = function(){
        image(this.img, this.x, this.y, this.scl, this.scl);
        
        //noFill();
        //strokeWeight(1);
        //stroke(255);
        
        //fill(this.col);
        
        for(var i = 0; i < this.tail.length; i++){
            //rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
            image(this.img, this.tail[i].x, this.tail[i].y, this.scl, this.scl);
        }
        
        //rect(this.x, this.y, this.scl, this.scl);
        image(this.img, this.x, this.y, this.scl, this.scl);
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