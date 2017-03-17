var Trump = function(scl, img) {
    
    this.x = width / 2;
    this.y = height - 40;
    this.img = img
    this.scl = scl;
    this.speed = 2;
    this.xdir = 0;
    
    this.show = function () {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.scl, this.scl);
    }
    
    this.move = function() {
        this.x += this.xdir;
    }
    
    this.dir = function(dir) {
        //this.x += dir * this.scl;
        this.xdir = dir * this.speed;
    }
    
    
}