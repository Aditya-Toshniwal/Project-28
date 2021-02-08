const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var boysprite, boy_image;
var Tree , tree_img;
var slingshot; 
var mango1, mango2,mango3,mango4, mango5,mango6, mangoIMG;
var stone1;
function preload()
{
boy_image= loadImage("Plucking mangoes/boy.png");	
//tree_img= loadImage("Plucking mangoes/tree.png");

}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	var optionsB={
		isStatic:true
	}
	boysprite=createSprite(150, 630, 20,20);
	boysprite.addImage(boy_image)
	boysprite.scale=0.1
	var optionsB={
		isStatic:true
	}
	
	
	ground= new Ground(650,690,1300,20);

	//stone1= new Stone(200,200,20,20);
	Tree= new tree(1000,350, 500 ,800);
	//treesprite.addImage(tree_img)
	//treesprite.scale=0.4
	mango1= new Mango(1100,100,40);
	mango2= new Mango(950,250,40);
	mango3= new Mango(870,200,40);
	mango4= new Mango(1000,150,40);
	mango5= new Mango(900,100,40);
	mango6= new Mango(1200,200,40);
	stone1= new Stone(250,630,30,30);

	slingshot = new SlingShot(stone1.body,{x:90, y:560});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
 
  ground.display();
  slingshot.display();
  Tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  detectollision(stone1, mango1);
  detectollision(stone1, mango2);
  detectollision(stone1, mango3);
  detectollision(stone1, mango4);
  detectollision(stone1, mango5);
  detectollision(stone1, mango6);
  drawSprites();
 
}
function mouseDragged(){ 
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY}); 
}
function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32 ){
       slingshot.attach(stone1.body);
    }}
function detectollision(lstone,lmango){
	mangoBodyPosition= lmango.body.position
	stoneBodyPosition= lstone.body.position

	var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}
	
