
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

//creating monkey
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale= 0.1

ground = createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)




function setup() {
  

  
}


function draw() {
  
  //jump when the space key is pressed
  
    if(keyDown("space") && monkey.y >= 359){
      monkey.velocityY = -12 ;
      playSound("jump.mp3");
    }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;

  //invisible Ground to support Monkey
var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;
}






