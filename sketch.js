
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var bobSprite1, bobSprite2, bobSprite3, bobSprite4, bobSprite5, roofSprite;
var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();
	
	bobObject1 = new Bob();
	bobObject1.body.position.x = 300;
	 
	bobObject2 = new Bob();
	bobObject2.body.position.x = 350;

	bobObject3 = new Bob();
	bobObject3.body.position.x = 400;

	bobObject4 = new Bob();
	bobObject4.body.position.x = 450;

	bobObject5 = new Bob();
	bobObject5.body.position.x = 500;
	/*ellipse(bobObject1.body.position.x, bobObject1.body.position.y, 50, 50);
	ellipse(bobObject2.body.position.x, bobObject2.body.position.y, 50, 50);
	ellipse(bobObject3.body.position.x, bobObject3.body.position.y, 50, 50);
	ellipse(bobObject4.body.position.x, bobObject4.body.position.y, 50, 50);
	ellipse(bobObject5.body.position.x, bobObject5.body.position.y, 50, 50);
	rect(roof.body.position.x, roof.body.position.y, width, 20);*/
	rope1 = new Rope(bobObject1.body, roof.body, bobObject1.body.position.x, roof.body.position.y);
	rope2 = new Rope(bobObject2.body, roof.body, bobObject2.body.position.x, roof.body.position.y);
	rope3 = new Rope(bobObject3.body, roof.body, bobObject3.body.position.x, roof.body.position.y);
	rope4 = new Rope(bobObject4.body, roof.body, bobObject4.body.position.x, roof.body.position.y);
	rope5 = new Rope(bobObject5.body, roof.body, bobObject5.body.position.x, roof.body.position.y);
	
	//n = number, forceA and forceB are opposite, and combining them together should result in a net force, and applyForce() should run again.
	//code	
	
	Engine.run(engine);
	console.log();
	console.log(bobObject1.body.position, bobObject2.body.position, bobObject3.body.position, bobObject4.body.position, bobObject5.body.position);
	//console.log(bobObject1.depth);
}


function draw() {
  rectMode(CENTER);
  background(230);
  /*ellipse(bobObject1.body.position.x, bobObject1.body.position.y, 50, 50);
  ellipse(bobObject2.body.position.x, bobObject2.body.position.y, 50, 50);
  ellipse(bobObject3.body.position.x, bobObject3.body.position.y, 50, 50);
  ellipse(bobObject4.body.position.x, bobObject4.body.position.y, 50, 50);
  ellipse(bobObject5.body.position.x, bobObject5.body.position.y, 50, 50);
  rect(roof.body.position.x, roof.body.position.y, width, 20);*/
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  Engine.update(engine);
  drawSprites();

  if (keyCode === UP_ARROW) {
	  console.log(keyCode === UP_ARROW);
	  Body.applyForce(bobObject1.body, {x: bobObject1.body.position.x, y: bobObject1.body.position.y}, {x: -100, y: 0});
  }
 
}



