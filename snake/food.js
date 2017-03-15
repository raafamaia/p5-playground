var Food = function(scl, img){
    this.scl = scl;
    this.x = 0;
    this.y = 0;
    this.img = img;
    
    this.show = function(){
        
        
        //image(this.img, this.x , this.y , this.scl, this.scl);
        image(this.img, this.x + (this.scl / 4), this.y + (this.scl / 4), this.scl / 2, this.scl / 2);
        //fill(255, 0, 50);
        //rect(this.x + (this.scl / 4), this.y + (this.scl / 4), this.scl / 2, this.scl / 2)
        
    }
    
    this.pickLocation = function(){
        
        var cols = floor(width/scl);
        var rows = floor(height/scl);
        
        this.x = floor(random(cols)) * scl;
        this.y = floor(random(rows)) * scl;
    };
    
}