var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","951daa88-4f8a-46b4-a601-c9add61e4ee2"],"propsByKey":{"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":15,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"XDt4mV3tx2QPn3bZpgq66JE.5vrvj0Rr","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":22},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"k5slnMONaR_kGZYtV.XqB0cQGsrGMSlR","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"951daa88-4f8a-46b4-a601-c9add61e4ee2":{"name":"award","sourceUrl":null,"frameSize":{"x":60,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"olB6vBUJI3QyjtVYlf5k6MbNoG3bLIpv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":77},"rootRelativePath":"assets/951daa88-4f8a-46b4-a601-c9add61e4ee2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//top wall
var wall1 = createSprite(250, 130, 300, 5);

//bottom wall
var wall2 = createSprite(150, 270, 300, 5);

var you = createSprite(20, 335, 5, 5);
you.shapeColor = "green";

//bottom section balls
var ball1 = createSprite(80, 335, 10, 10);
var ball2 = createSprite(120, 335, 10, 10);
var ball3 = createSprite(160, 335, 10, 10);
var ball4 = createSprite(200, 335, 10, 10);
var ball5 = createSprite(240, 335, 10, 10);
var ball6 = createSprite(280, 335, 10, 10);
ball1.shapeColor = "red";
ball2.shapeColor = "red";
ball3.shapeColor = "red";
ball4.shapeColor = "red";
ball5.shapeColor = "red";
ball6.shapeColor = "red";

//doors
var sDoor1 = createSprite(360, 270, 50, 8);
var sDoor2 = createSprite(40, 130, 50, 8);
sDoor1.shapeColor = "red";
sDoor2.shapeColor = "red";

//middle section
var line1 = createSprite(125, 200, 50, 7);
var line2 = createSprite(200, 200, 50, 7);
var line3 = createSprite(275, 200, 50, 7);
line1.shapeColor = "red";
line2.shapeColor = "red";
line3.shapeColor = "red";

//top section
var ball7 = createSprite(200, 100, 10, 10);
var ball8 = createSprite(250, 100, 10, 10);
var ball9 = createSprite(200, 50, 10, 10);
var ball10 = createSprite(250, 50, 10, 10);
ball7.shapeColor = "red";
ball8.shapeColor = "red";
ball9.shapeColor = "red";
ball10.shapeColor = "red";

//trophy
var objective = createSprite(360, 75, 20, 20);
objective.shapeColor = "yellow";

//score
var score = 0;

//game states
var gameState = "play";



objective.setAnimation("award");




//playSound("assets/category_music/clear_evidence_loop1.mp3", true);

velocity();

function draw() {
  background("lightblue");
  bounce();
  if(keyDown("left")){
   you.x = you.x-3;
   gameState = "play";
  }
  if(keyDown("right")){
    you.x = you.x+3;
    gameState = "play";
  }
  if(keyDown("up")){
    you.y = you.y-3;
    gameState = "play";
  }
  if(keyDown("down")){
    you.y = you.y+3;
    gameState = "play";
  }
  
  text("DEATHS: "+score, 10, 10);
  
  
  if(you.collide(ball1)||you.collide(ball2)||you.collide(ball3)||you.collide(ball4)
     ||you.collide(ball5)||you.collide(ball6)||you.collide(ball7)||
     you.collide(ball8)||you.collide(ball9)||you.collide(ball10)||
     you.collide(sDoor1)||you.collide(sDoor2)||you.collide(line1)||
     you.collide(line2)||you.collide(line3)){
    reset();
    score = score+1;
  }
  
  if(you.collide(objective)){
    gameState = "over";
    text("YOU WIN!",200, 200);
    you.velocityX = 0.0000001;
    you.velocityY = 0.0000001;
    score = 0;
    text("press R to restart", 200, 220);
  }
  
  if(keyDown("R")&&gameState === "over"){
    reset();
  }
  
  

  
  drawSprites();
  
  
  
  
ball7.bounceOff(objective);
ball8.bounceOff(objective);
ball9.bounceOff(objective);
ball10.bounceOff(objective);
  
}
















function reset(){
  you.x = 20;
  you.y = 335;
  you.velocityX = 0;
  you.velocityY = 0;
}


function velocity(){
  
  
  ball1.velocityY = 10;
  ball2.velocityY = -10;
  ball3.velocityY = 10;
  ball4.velocityY = -10;
  ball5.velocityY = 10;
  ball6.velocityY = -10;
  ball7.velocityY = 10;
  ball8.velocityX = -10;
  ball9.velocityX = 10;
  ball10.velocityY = -10;
  line1.velocityY = 5;
  line2.velocityY = -5;
  line3.velocityY = 5;
  sDoor1.velocityX = 3;
  sDoor2.velocityX = -3;
}



function bounce(){
  createEdgeSprites();
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball7.bounceOff(edges);
  ball8.bounceOff(edges);
  ball9.bounceOff(edges);
  ball10.bounceOff(edges);
  sDoor1.bounceOff(edges);
  sDoor2.bounceOff(edges);
  you.bounceOff(edges);
  
  
  ball1.bounceOff(wall2);
  ball2.bounceOff(wall2);
  ball3.bounceOff(wall2);
  ball4.bounceOff(wall2);
  ball5.bounceOff(wall2);
  ball6.bounceOff(wall2);
  
  sDoor1.bounceOff(wall2);
  sDoor2.bounceOff(wall1);
  
  line1.bounceOff(wall1);
  line1.bounceOff(wall2);
  line2.bounceOff(wall1);
  line2.bounceOff(wall2);
  line3.bounceOff(wall1);
  line3.bounceOff(wall2);
  line1.bounceOff(edges);
  line2.bounceOff(edges);
  line3.bounceOff(edges);
  
  ball7.bounceOff(wall1);
  ball8.bounceOff(wall1);
  ball9.bounceOff(wall1);
  ball10.bounceOff(wall1);
  
  you.bounceOff(wall1);
  you.bounceOff(wall2);
} 









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
