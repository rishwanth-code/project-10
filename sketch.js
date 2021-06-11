var ship,ship_sailing,sea,seaimage;
function preload(){
sea = createSprite(200,200,400,400);
ship= createSprite(50,300,100,100);
seaimage = loadImage("sea.png");
ship_sailing= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea.addImage("blablabla",seaimage)
  sea.x=200
  ship.addAnimation("madeitsailing", ship_sailing);
  ship.scale=0.15
sea.scale=0.25
}

function draw() {
  background("blue")
 sea.velocityX=-2
 if(sea.x<=0){
  sea.x=200;
 }
 
 drawSprites();
}