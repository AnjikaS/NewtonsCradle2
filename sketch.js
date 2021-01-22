
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling
var rope

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new Roof(400, 200, 400, 20);

	Bob1 = new Bob(400, 500, 25);
	Bob2 = new Bob(450, 500, 25);
	Bob3 = new Bob(350, 500, 25);
	Bob4 = new Bob(500, 500, 25);
	Bob5 = new Bob(300, 500, 25);

	rope = new Rope(Bob1.bob, Ground.roof, 400);
	rope2 = new Rope(Bob2.bob, Ground.roof, 450);
	rope3 = new Rope(Bob3.bob, Ground.roof, 350);
	rope4 = new Rope(Bob4.bob, Ground.roof, 500);
	rope5 = new Rope(Bob5.bob, Ground.roof, 300);


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  Ground.display();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Bob5.bob,Bob5.bob.position,{x:-10,y:-10});
	}
}

function mouseDragged(){
        Matter.Body.setPosition(Bob5.bob, {x: mouseX , y: mouseY});
}
