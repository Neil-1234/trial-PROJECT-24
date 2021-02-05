
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	 
	var engine, world;
	var hammer;
	var stone;
	var ground;
	var rubber;
	var sand1;
	var iron;

}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,height,2000,20);
	hammer = new Hammer(200,200,150,PI/2);
	stone = new Stone(100,650,50,50);
	rubber = new Rubber(150,150,50);
	sand1 = new Sand(200,560,20);
	sand2 = new Sand(130,530,10);
	sand3 = new Sand(234,660,10);
	iron = new Iron(650,500,100,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
   hammer.display();
   stone.display();
   ground.display();
   rubber.display();
   sand1.display();
   sand2.display();
   sand3.display();
   iron.display();

  drawSprites();
 
}



