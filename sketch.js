var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1body , rect2body , rect3body ; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1 , rect2 , rect3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/width, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX = 2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rect1body = Bodies.rectangle(width/2 , 190 , 250 ,10);
	World.add(world , rect1body)
	rect(width/2 , 190,250, 10);

	Engine.run(engine);

	rect1 = new Box(400 , height - 55 , 200 , 20);
	rect2 = new Box(500,height - 95,20,100);
	rect3 = new Box(300,height- 95 ,20,100)

	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);  
  packageBody.y = helicopterSprite.y;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  rect1.display();
  rect2.display();
  rect3.display();
  

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Body.setStatic(packageBody,false)
	 }
}



