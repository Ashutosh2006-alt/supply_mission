//this is the variable for the game.
var logo;
var helicopter;
var back;
var pakagebody;
var box1, box2, box3

//this are the constant variable for the gravity engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// this is the function preload for loading images in the game;
function preload() {
  back_ground = loadImage("images/bac.jpg");
  box_drop = loadImage("images/box.png");
  logoImage = loadImage("images/logo.png");
  helicopter_flying = loadAnimation("images/h1.png", "images/h2.png", "images/h3.png", "images/h4.png");
}
// this is the function setup for the arrangement of the game.
function setup() {

  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  helicopter = createSprite(-150, height / 4, 50, 50);
  helicopter.addAnimation("flying", helicopter_flying);
  helicopter.framedelay = 1;
  helicopter.scale = 0.7;

  back = createSprite(width / 2, height / 2, 1, 1);
  back.addImage(back_ground);
  back.scale = 2;
  back.depth = -5;

  box5 = createSprite(width / 2, height / 4, 1, 1);
  box5.addImage(box_drop);
  box5.scale = 0.07;
  box5.depth = -3;
  box5.visible = false;

  logo = createSprite(width / 2, height / 8, 1, 1);
  logo.addImage(logoImage);
  logo.scale = 0.5;
  logo.visible = true;

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 200, 20, { restitution: 0.5, isStatic: true });
  World.add(world, packageBody);

  box2 = new Box(width / 2 + 100, height / 2 + 210, 20, 100, "brown");
  box3 = new Box(width / 2 - 100, height / 2 + 210, 20, 100, "brown");
  box1 = new Box(width / 2, height / 2 + 250, 200, 20, "brown");

  Engine.run(engine);
}

// this is the function draw for drawing functions for the game;
function draw() {
  rectMode(CENTER);
  background(0);
  box5.x = packageBody.position.x;
  box5.y = packageBody.position.y;

  if (keyWentDown("space")) {
    Matter.Body.setStatic(packageBody, false);
  }

  if (helicopter.x > width / 2 - 20) {
    box5.visible = true;
  }
  if (helicopter.x < width / 2) {
    if (keyDown("right")) {
      helicopter.x = helicopter.x + 15;
    }
    if (keyDown("left")) {
      helicopter.x = helicopter.x - 15;
    }

  }
  if(helicopter.x> -50){
    logo.visible =false;
  }
  drawSprites();
  box1.display();
  box2.display();
  box3.display();

  Engine.update(engine);
}

