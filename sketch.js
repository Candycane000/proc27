
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

var roof;
var ball1,ball2,ball3,ball4,ball5

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    roof= new Roof(400,150,250,20)
	Engine.run(engine);
	ball1=new Ball(400,350,35)
	ball2=new Ball(365,297 ,35)
	ball3=new Ball(435,297,35)
	ball4=new Ball(470,297,35)
	ball5=new Ball(330,297,35)
	
	sup1 = new Roof(365,150,5,5)

	sup2 = new Roof(435,150,5,5)
  
	sup3 = new Roof(470,150,5,5)
  
	sup4 = new Roof(330,150,5,5)


	rope1 = new Rope(roof.body, ball1.body);

	rope2 = new Rope(sup1.body, ball2.body);
  
	rope3 = new Rope(ball3.body, sup2.body);
  
	rope4 = new Rope(ball4.body, sup3.body);
  
	rope5 = new Rope(ball5.body, sup4.body);
  
   
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()

 ball1.display()
 ball2.display()
 ball3.display()
 ball4.display()
 ball5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
  
	  Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-200,y:-200});
	 
	
	}
  }