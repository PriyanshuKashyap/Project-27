
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var engine, world;
var roof;
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
	//bobObject1.body.position.x = 200;
	/*bobObject2 = new Bob();
	bobObject2.body.position.x = 300;
	bobObject3 = new Bob();
	bobObject3.body.position.x = 400;
	bobObject4 = new Bob();
	bobObject4.body.position.x = 500;
	bobObject5 = new Bob();
	bobObject5.body.position.x = 600;*/
	Engine.run(engine);
	console.log(bobObject1);
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  Engine.update(engine);
  drawSprites();
 
}



