
           class Rope{
               constructor(Body1, Body2, point2){
                var options = {
                 bodyA: Body1,
                 bodyB: Body2,
                   stiffness: 0.05,
                    length: 300
                }
                 this.pointB = point2;
                 this.chain =  Constraint.create(options);
                 World.add(world, this.chain);
                }
             
                display(){
                 strokeWeight(10);
                 if(this.chain.bodyA){
                 line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, 
                      this.pointB, 200);
                 }
                }
                fly(){
                    this.chain.bodyA = null;
                }
                attach(body){
                    this.sling.bodyA = body;
                }
             }
             