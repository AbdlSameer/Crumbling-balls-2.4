
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1 = new ground(width/2,670,width,20)

  //box1 = new box(1300, 680, 200,20);
	//box2 = new box(1200,600,20,200);
	//box3 = new box(1395,600,20,200);
  dustbin1 = new dustbin(1200,650);
  paperObject = new paper(200,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  
  //box1.display();
  //box2.display(); 
  //box3.display();
  ground1.display();
  paperObject.display();
  dustbin1.display();

  drawSprites();
 
}
function keyPressed() 
{
 if (keyCode === UP_ARROW) 
  {
   Matter.Body.applyForce( paperObject.body,paperObject.body.position,{x:85,y:-85})
    
  }
}


