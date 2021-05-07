
var monkey , monkey_running, monkey_collide
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var gamestate = PLAY
var PLAY
var END

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey_collide = loadAnimation("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  createCanvas (600,200);
  monkey = createSprite (50,160,20,50)
  monkey.addAnimation ("running", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(600,190,600,10);
  ground.x = ground.width /2;
  ground.shapeColor = ("#836539")

  
}


function draw() {
  background ("#87ceeb")
  monkey.collide (ground);
  
  if (gamestate === PLAY){
  if (keyDown ("space") && monkey.y > 145){      
    monkey.velocityY = -15;
    console.log (monkey.y)  
    spawnRock ();  
    spawnBanana();
  }
  }
  
  else if (gamestate === END){
    bananaGroup.setLifetimeEach = -1
    obstacleGroup.setLifetimeEach = -1
    bananaGroup.setVelocityXEach = 0
    obstacleGroup.setVelocityXEach = 0
    monkey.changeAnimation ("collided", monkey_collide)
  
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  bananaGroup = createGroup ();
  obstacleGroup = createGroup ();
  
drawSprites ();
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(70,120));
    banana.addImage (bananaImage)
    banana.scale = 0.1
    banana.lifetime = 300
    banana.velocityX = -3
    bananaGroup.add (banana);
  }
}

function spawnRock(){
  if(frameCount % 150 === 0){
    var rock = createSprite(600,170,40,10);
    rock.addImage (obstacleImage)
    rock.scale = 0.12
    rock.lifetime = 300
    rock.velocityX = -3
    obstacleGroup.add (rock);
  }
}









