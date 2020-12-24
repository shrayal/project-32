const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var gameState="onsling"
var sling,s,g,b1,b2,b3,b4,b5,b6,b7,b8,b9;
var score=0
function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(800,800);
  stroke(255)
  s=new Striker(200,200)
  sling=new SlingShot(s.body,{x:200,y:200})
  g=new Ground(500,375,300,15)
  b1=new Box(600,200,50,50)
  b2=new Box(550,200,50,50)
  b3=new Box(500,200,50,50)
  b4=new Box(450,200,50,50)
  b5=new Box(400,200,50,50)
  b6=new Box(450,100,50,50)
  b7=new Box(500,100,50,50)
  b8=new Box(550,100,50,50)
  b9=new Box(500,50,50,50)
}

function draw() {
  background(0);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  Engine.update(engine)
 s.display()
 sling.display()
 g.display()
 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 b6.display()
 b7.display()
 b8.display()
 b9.display()
 b1.score();
 b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 b7.score();
 b8.score();
 b9.score();
}

function mouseDragged(){
  if (gameState==="onsling"){
  
      Matter.Body.setPosition(s.body, {x: mouseX , y: mouseY});
  }
  }
  
  function mouseReleased(){
      sling.fly();
      gameState="launched"
  }