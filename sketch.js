var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangeLeafImg=loadImage("orangeLeaf.png");
  leafImg=loadImage("leaf.png")
  redImg=loadImage("redImage.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  drawSprites();
  var select_sprites = Math.round(random(1,3)); 
  
if (frameCount % 80 == 0)
{ if (select_sprites == 1) { 
  createApples();
                                                     
                                                     
} else if (select_sprites == 2) { 
  createOrange(); 
                                
}else { 
  createRed();
} 
} 



}

function createApples(){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage("a1",appleImg);
  apple.veloxityY=3
  
}
function createOrange(){
  orange=createSprite(random(50,350),40,10,10)
orange.addImage("o1",orangeImg)
orange.velocityY=3;
}
function createRed(){
red=createSprite(random(50,350),40,10,10)
  red.addImage("r1",redImg)
  red.velocityY=3
}
                