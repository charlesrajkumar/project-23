const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var cb;
var cplayer;
var pb;
var pbplayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   cb=new ComputerBase(900,random(450,height-300),180,50,"./assets/base2.png");
   cplayer=new Player(885,cb.body.position.y-110,50,180);

   pb=new ComputerBase(200,random(450,height-300),180,50,"./assets/base1.png");
  pbplayer=new Player(200,pb.body.position.y-110,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
cb.display();
pb.display();

   //display Player and computerplayer
   cplayer.display();
pbplayer.display();

}
