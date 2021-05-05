
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,650,800,20);
	roofObject = new Ground(400,100,400,20);

	bobDiameter = 50;
	startBobPositionX = width/2;
	startBobPositionY = height/4 + 200;

	bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
/*
    bobObject1 = new Bob(300,400,50);
	bobObject2 = new Bob(350,400,50);
	bobObject3 = new Bob(400,400,50);
	bobObject4 = new Bob(450,400,50);
	bobObject5 = new Bob(500,400,50);
*/
	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //ground1.display();
  roofObject.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:0});

	}
}