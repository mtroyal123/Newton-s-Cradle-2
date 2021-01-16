
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;

var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,40);

	bobObject1 = new Bob(200);
	//bobObject1 = Composites.newtonsCradle(200,600,5,100,500);
	//Body.translate(bobObject1.body[0], {x:-100, y:-100});
	bobObject2 = new Bob(300);
	bobObject3 = new Bob(400);
	bobObject4 = new Bob(500);
	bobObject5 = new Bob(600);
	//bobObject5 = Composites.newtonsCradle(600,600,4,100,500);
	//Body.translate(bobObject5.body[0],{x: -80, y:-40});

	rope1 = new Rope(bobObject1.body, roof.body, - 200, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -100, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0,0 );
	rope4 = new Rope(bobObject4.body, roof.body, +100, 0);
	rope5 = new Rope(bobObject5.body, roof.body, +200, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  KeyPressed();

  drawSprites();
 
}

function KeyPressed(){
	
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100, y:100});
	  }

}



