var a,b,c;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);

  b = createSprite(200, 100, 50, 50);
 

a.shapeColor="green";
b.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
}