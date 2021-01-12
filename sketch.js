
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(200,650,100000,20)
	ball1= new Ball(20,311,50,50)
	box1=new Box(625,595,20,90)
	box2=new Box(570,630,90,20)
	box3=new Box(515,595,20,90)

	
	


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("pink");



  ground.display()
  ball1.display()
  box1.display()
  box2.display()
  box3.display()
 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
	   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:-100})
	   
	 }
   }


