
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 let engine;
 let world;
 var fruit;
 var rope1;
 var omnom;
 var monster;
 var button;
 var backgroundImg;
 var button;
var melon_con;
function preload(){
  backgroundImg = loadImage("Grey-background-2.png");
  omnom = loadImage("on nom.jpg");
  fruit = loadImage("melon.jpg");
}

function setup() {
  createCanvas(500, 700);

  engine = Engine.create();
  world = engine.world;

  button = Bodies.circle(200,30, 20);
 

  button.mouseClicked(drop);

  rope1 = new Rope(6, {x:220, y:30});
  ground = newGround(200, 650, 600, 20);
  monster = createSprite(200,620,100,100);
  monster.addImage(omnom);
  monster.scale = 0.5;

  melon = Bodies.circle(300,300,25);
  Matter.Composite.add(rope.body, melon);

  melon_con = new Link(rope1, melon);
  
}


function draw() 
{
  background(51);
  image(backgroundimg,0,0,displayWidth+80,displayHeight);

  push();
  imageMode(CENTER);
  if(melon!=null){
    image(fruit,melon.position.x,melon.position.y,70,70);
  }
  pop();

  rope1.show();

  Engine.update(engine);
  ground.show();
  drawSprites();
   
}

function drop()
{
  rope1.break();
  melon_con.detach();
  melon_con = null; 
}

  


