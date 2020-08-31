/*var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

  if(isTouching()){

    movingRect.shapeColor="red";
    fixedRect.shapeColor = "red";
  }
else{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}



  drawSprites();
}*/


var wall,thickness;
var bullet,speed,weight;
var lbullet,lwall;


function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor=color(0);

  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83);
  
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255); 
  

/*if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
}*/
//hascollided();

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

if(damage<10){
  wall.shapeColor=color(0,255,0);
}

}


  drawSprites();
}


function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

