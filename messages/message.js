function Message(word, m, x, y){
    this.word = word;
    this.mass = m;
    this.position = createVector(x,y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    
    this.size = random(40, 60);
    
    this.setStyle = function(){
        textSize(this.size);
        stroke(this.g, this.r, this.b);
        strokeWeight(7);
        fill(this.r, this.g, this.b);
    };
    
}

// Newton's 2nd law: F = M * A
// or A = F / M
Message.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f); 
};
  
Message.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Message.prototype.display = function() {
    this.setStyle();
    text(this.word, this.position.x,this.position.y, this.mass*16);
};

// Bounce off bottom of window
Message.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass*8)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.9;
    this.position.y = (height - this.mass*8);
  }
};