var bg, bgImg;
var rocket, rocktImg;
var life;
var gamePlayingS;
var database;
var playerCount;
var allPlayers;

var planetsGroup,planet1,planet1Img,planet2,planet2Img;
var obstaclesGroup,obstacle1,obstacle2;
var scoreImg,score_;

var score;

var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
 //bgImg=loadImage("images/starSpaceBack_.png");
 rocktImg=loadImage("images/Rocket_Img.png");  
 planet1Img=loadImage("images/planet1.png");
 planet2Img=loadImage("images/planet2.png");
 obstacle1=loadImage("images/meteor.jpg");
 obstacle2=loadImage("images/meteor2.png");
// scoreImg=loadImage("images/scoreImg");
 

}

function setup(){
  createCanvas(1520,800);
  background(255)

 // bg=createSprite(761,356,70,70);
 // bg.addImage(bgImg);
 // bg.scale=2;
 // bg.velocityY=2;

  //database = firebase.database();
 // gameState = 0;

 //score_=createSprite(300,400,20,20);
// score_.addImage(scoreImg);
 //score_.scale=0.4;


  rocket=createSprite(750,600,20,20);
  rocket.addImage(rocktImg);
  rocket.scale=0.1;

  //creating obstacle and planets Group 
 // obstaclesGroup=createGroup();
  planetsGroup=createGroup();

 
  //setting collider radius
  rocket.setCollider("rectangle",0,0,rocket.width,rocket.height);
  rocket.debug=true;

}

function draw(){
  background(0);

  //displaying score
  text("Score: "+ score, 500,50);
  
 text(mouseX +" , " + mouseY, 30,40)

 if(gameState===PLAY){
// creating infinite ground
//if (bg.y > 600){
 // bg.y = 400;
 //}

 //spawn the obstacles
// spawnObstacles();

 //spwn the planets
 spawnPlanets();

 //for moving the rocket left & right
 if(keyDown("RIGHT_ARROW")){
   rocket.x=rocket.x+5;
 }
 if(keyDown("LEFT_ARROW")){
  rocket.x=rocket.x-5;
}

 //if(obstaclesGroup.isTouching(rocket)){
 // gameState = END;
 // bgImg.velocityY=0;
 // rocket.velocityY=0;
 //}

 }
 else if(gameState===END){
   bg.velocityY=0;
   rocket.velocityY=0;
   //obstaclesGroup.setVelocityXEach(0);
   planetsGroup.setVelocityXEach(0);    
 
    //set lifetime of the game objects so that they are never destroyed
    //obstaclesGroup.setLifetimeEach(-1);
    planetsGroup.setLifetimeEach(-1);
     
 }
  //displaying player lives
  //text("LIFE:"+life, 500,50);



  drawSprites();
}
//function to spawn the obstacles
//function spawnObstacles(){
 //if(frameCount % 60 === 0)
 //var obstacles = createSprite(600,400,40,40);
//   obstacles.velocityY = 6;

   //generate random obstacles
  // var rand = Math.round(random(1,2));
  //switch(rand){
  //   case 1:obstacles.addImage(obstacle1);
   //       break;
   //  case 2:obstacles.addImage(obstacle2);
  //        break;

   // default : break;
// }
    //assign scale and lifetime to the obstacle           
   //obstacles.scale = 0.5;
   // obstacles.lifetime = 300;
   
   //add each obstacle to the group
   // obstaclesGroup.add(obstacle1,obstacle2);
 //}

//function to spawn the planets
function spawnPlanets(){
  if(frameCount % 60 === 0){
    var planet1 = createSprite(600,120,40,10);
    planet1.y=Math.round(random(10,10));
    planet1.addImage(planet1Img);
    planet1.scale=0.1;
    planet1.velocityY=4;
    planet1.lifetime=700;
  
    var planet2 = createSprite(795,1,10,10                                          );
    planet2.y=Math.round(random(30,100));
    planet2.addImage(planet2Img);
    planet2.scale=0.1;
    planet2.velocityY=4;
    planet2.lifetime=200;

    planetsGroup.add(planet1,planet2);

  }
}