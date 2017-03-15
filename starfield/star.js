var Star = function()
{
    this.z = random(width);
    this.x = random(-width, width);  
    this.y = random(-height, height);
    
    this.pz = this.z;
      
    
    this.show = function ()
    {
        if(this.z < 1)
        {
            this.z = width;
            this.x = random(-width, width);  
            this.y = random(-height, height);
            this.pz = this.z;
        }
        
        fill(255);
        noStroke();
        
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        
        var r = map(this.z, 0, width, 16, 0);
        
        ellipse(sx, sy, r);
        
        var px = map(this.x / this.pz, 0, 1, 0, width);
        var py = map(this.y / this.pz, 0, 1, 0, height);
        
        //stroke(255);
        //line(sx, sy, px, py);
    }   
    
    this.update = function()
    {
        this.z -= speed;
    }
}