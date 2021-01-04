
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var dustbin,paper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,height,width,40);
  //ground=new Ground(400,680,800,20)
  
  dustbin1=new Dustbin(600,570,100,15);
  dustbin2=new Dustbin(550,550,15,80);
  dustbin3=new Dustbin(660,550,15,80);
  
  paper=new Paper(100,320,50,50);
  //paper=new paper(100,600,10);
  paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
  World.add(world, paperBody);
 
 

	Engine.run(engine);
  
}


function draw() {
  

  //Matter.Bodies.circle(50, 50, 10) 

  rectMode(CENTER);
  background(0); 
  Engine.update(engine);
 // dustbin.display(); 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();

  //box3.display(); 
  //box4.display();
  //box5.display();
 // keyPressed();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
  }
}



