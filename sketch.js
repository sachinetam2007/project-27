
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter=40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bob1=new Bob(width/2-bobDiameter*2,height/4+500,bobDiameter)
bob2=new Bob(width/2-bobDiameter,height/4+500,bobDiameter)
bob3=new Bob(width/2,height/4+500,bobDiameter)
bob4=new Bob(width/2+bobDiameter,height/4+500,bobDiameter)
bob5=new Bob(width/2+bobDiameter*2,height/4+500,bobDiameter)
roof=new Roof(width/2,height/4,width/7,20)
rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0)
rope3=new Rope(bob3.body,roof.body,0,0)
rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0)
rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}



