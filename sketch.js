const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var groundL, groundR, groundB, groundT;
var ball;

var button1, button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  button1 = createImg("right.png");
  button1.position(220, 30);
  button1.size(50, 50);
  button1.mouseClicked(hForce);

  button2 = createImg("up.png");
  button2.position(20, 30);
  button2.size(50, 50);
  button2.mouseClicked(vForce);


  groundB = new Ground(200, 390, 400, 20);
  groundR = new Ground(390, 200, 20, 400);
  groundL = new Ground(10, 200, 20, 400);
  groundT = new Ground(200, 10, 400, 20);

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS); 

}

function draw() 
{
  background(51);
  Engine.update(engine);
  groundB.show();
  groundR.show();
  groundL.show();
  groundT.show();
  
  ellipse(ball.position.x, ball.position.y, 20);

}

function hForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
}

function vForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}



