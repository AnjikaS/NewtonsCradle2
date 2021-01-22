class Bob {
    constructor(x,y,radius){
        var bob_options = {
            isStatic: false,
            density: 0.5,
            restitution: 1,
            friction: 0
         }

      this.bob = Bodies.circle(x,y,radius, bob_options);
      this.radius = radius;
      World.add(world, this.bob);
  
    };
   display(){
        ellipseMode(RADIUS);
       fill("pink");
      // circle(this.bob.position.x,this.bob.position.y,this.radius*2)
       ellipse(this.bob.position.x, this.bob.position.y, this.radius)
    }
   }