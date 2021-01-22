class Roof {
    constructor(x,y,width,height){
      var roof_options = {
        isStatic: true 
     }
      this.roof = Bodies.rectangle(x,y,width,height, roof_options);
      this.width = width;
      this.height = height;
      World.add(world, this.roof);
  
    };
   display(){
       rectMode(CENTER);
       fill("grey");
       rect(this.roof.position.x,this.roof.position.y,this.width,this.height)}
   }