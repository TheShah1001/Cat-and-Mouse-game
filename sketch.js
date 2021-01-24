var garden, gardenImage
var tom, tomImage, catRunning, tomStop
var jerry, jerryImage, jerryRunning, jerryStop


function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    tomImage = loadImage("images/tomOne.png")
    catRunning = loadAnimation("images/tomTwo.png","images/tomThree.png")
    tomStop = loadAnimation("images/tomFour.png")

    jerryImage = loadImage("images/jerryOne.png")
    jerryRunning = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    jerryStop = loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(600,600);
    garden = createSprite(300,300,20,20)
    garden.addImage(gardenImage)

    tom = createSprite(500,400,20,20)
    tom.scale = 0.1
    tom.addImage(tomImage)

    tom.addAnimation("moving",catRunning)
    tom.addAnimation("stop",tomStop)

    jerry = createSprite(100,400,20,20)
    jerry.scale = 0.1
    jerry.addImage(jerryImage)

    jerry.addAnimation("moving",jerryRunning)
    jerry.addAnimation("stop",jerryStop)

    //create tom and jerry sprites here

}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    jerry.debug = true;
    tom.debug = true;

    jerry.setCollider("rectangle",0,0,100,100);

    if(jerry.x - tom.x <= jerry.width/2 + tom.width/2
        && tom.x - jerry.x <= tom.width/2 + jerry.width/2
        && jerry.y - tom.y <= jerry.height/2 + jerry.height/2
        && tom.y - jerry.y <= tom.height/2 + jerry.height/2){
            tom.changeAnimation("stop", jerryStop)
            jerry.changeAnimation("stop", tomStop)
            tom.velocityX = 0
        }

    keyPressed()

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      tom.velocityX = -5
      tom.changeAnimation("moving",catRunning);

      jerry.changeAnimation("moving", jerryRunning)
  }


}
