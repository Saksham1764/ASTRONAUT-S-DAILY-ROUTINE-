  var astronaut;
  var bg,sleep,brush,gym,eat,bath,move;

  function setup() {
    createCanvas(800,400);
  astronaut= createSprite(300, 200);
  astronaut= addAnimation ("sleeping",sleep);
  astronaut.scale=0.1;

    
  }
  function preload(){
  bg = loadImage ("images/iss.png");
  sleep = loadAnimation ("images/sleep.png");
  brush = loadAnimation ("images/brush.png");
  gym = loadAnimation("images/gym21.png","images/gym22.png");
  eat = loadAnimation ("images/eat1.png","images/eat2.png");
  bath = loadAnimation ("images/bath1.png","images/bath2.png");
  drink = loadAnimation ("images/drink1.png","images/drink2.png");

  }
  function draw() {
    background(bg);  
    textSize(20);
    fill("white");
    text("instructions",20,35);
    textSize(15);
    text("upArrow=Brushing",20,35);

    edges=createEdgeSprites();
    astronaut.bounceOff(edges);
    if(keyDown("up_Arrow")){
      astronaut.addAnimation("brushing",brush);
      astronaut.changeAnimation("brushing");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
    }
    if(keyDown("down_Arrow")){
      astronaut.addAnimation("gymming",gym);
      astronaut.changeAnimation("gymming");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
    }
    if(keyDown("left_Arrow")){
      astronaut.addAnimation("bathing",bath);
      astronaut.changeAnimation("bathing");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
    }
    if(keyDown("right_Arrow")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y=350;
      astronaut.velocityX=1;
      astronaut.velocityY=0;
    }
    if(keyDown("m")){
      astronaut.addAnimation("moveing",move);
      astronaut.changeAnimation("moveing");
      astronaut.y=350;
      astronaut.velocityX=1;
      astronaut.velocityY=1;
    }
    drawSprites();

  }