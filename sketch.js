
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {  
    isStatic:true      
  }

 ground = Bodies.rectangle(400,380,800,20,ground_options);
 World.add(myWorld,ground);

var ball_options = {
  restitution : 1.0
}

ball = Bodies.circle(400,100,30,ball_options);
World.add(myWorld,ball);

 
}

function draw() {
  background("lightblue");  
  Engine.update(myEngine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  fill("green");
  ellipse(ball.position.x,ball.position.y,30,30);

}