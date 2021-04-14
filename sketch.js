
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)
  
  monkey = createSprite(80,380,20,50)
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.15;
  
  
  ground = createSprite(100,500,600,20)
  ground.x = ground.width/2;
  console.log(ground.x)
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  score = 0;

  
}


function draw() {
background("green");
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  spawnObstacles();
  spawnBanana();
  
  if(keyDown("space")&& monkey.y >= 350){
    monkey.velocityY = -10;
  }
  
   monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground);
 
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
   if(obstacleGroup.isTouching(monkey)){
     obstacleGroup

  }
  
  
  
  drawSprites();
  fill("white")
  text("Score "+ score,500,50);
  
  fill("black")
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50)
}

function spawnBanana(){
  
  if(frameCount % 160 === 0){
    banana = createSprite(600,150,40,10);
    banana.y = Math.round(random(250,300));
    banana.addImage(bananaImage);
    banana.scale = 0.25;
    banana.velocityX = -3;
    
    
    monkey.lifeTime = 400;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 150 === 0){
    var obstacle = createSprite(500,530,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    
    
    var rand = Math.round(random(1));
    switch(rand){
        case 1: obstacle.addImage(obstacleImage);
               break;
               default: break
    }
               
    obstacle.scale = 0.60;
    obstacle.lifetime = 500;
        
        
        obstacleGroup.add(obstacle);
  }
}



