class paper {
  constructor(x, y, radius) {
    var options = {
         isStatic : false,
        'restitution':0.3,
        'friction':0.5,
        'density':0.18
        
    }
   
    this.body = Bodies.circle(x, y,50, options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("paperImage.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(2)
    stroke("green")
    fill("brown");
   image(this.image, 0, 0, this.radius, this.radius);
    pop();
  }
};
