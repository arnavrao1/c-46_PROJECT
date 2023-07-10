var spaceshipImg, cometImg, backgroundImg, boomImg
var spaceship, obstacle, obstacleGroup, resetButton, resetButtonImg
var lives = 3

function preload() {
  spaceshipImg = loadImage("spaceship.png")
cometImg = loadImage("comet.png")
backgroundImg = loadImage("background.jpg")
boomImg = loadImage("boom.png")
resetButtonImg = loadImage("resetButton.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  obstacleGroup = new Group()
  spaceship = createSprite(960, 540)
  spaceship.addImage("spaceship", spaceshipImg)
  spaceship.addImage("boom", boomImg)
  spaceship.scale = 0.5
  resetButton = createSprite(960, 800)
resetButton.addImage("resetButton", resetButtonImg)
resetButton.scale = 0.4
resetButton.visible = false

}

function draw() {
  background(backgroundImg);
  spawnObstacles()

  if(keyIsDown(UP_ARROW)) {
    spaceship.y = spaceship.y-15
  }

  if(keyIsDown(RIGHT_ARROW)) {
    spaceship.x = spaceship.x+15
  }

  if(keyIsDown(LEFT_ARROW)) {
    spaceship.x = spaceship.x-15
  }

  if(keyIsDown(DOWN_ARROW)) {
    spaceship.y = spaceship.y+15
  }

  if(lives<=0) {
    spaceship.changeImage("boom")
    obstacle.visible = false
    spaceship.scale = 0.7
    lives = 0
    if(keyIsDown(UP_ARROW)) {
      spaceship.x = 960
      spaceship.y = 540
    }

    if(keyIsDown(LEFT_ARROW)) {
      spaceship.x = 960
      spaceship.y = 540
    }

    if(keyIsDown(RIGHT_ARROW)) {
      spaceship.x = 960
      spaceship.y = 540
    }

    if(keyIsDown(DOWN_ARROW)) {
      spaceship.x = 960
      spaceship.y = 540
    }
resetButton.visible = true

if(mousePressedOver(resetButton)) {
  reset()
}
  }

  drawSprites();

  fill("white")
textSize(40)
  text("Lives = "+lives, 25, 35)
  

  if(lives<=0) {
textSize(40)
    text("Oops! You lost the game!", 940, 150)
  }
}


function spawnObstacles() {
if(frameCount % 80 === 0) {
  obstacle = createSprite(50, 100)
  obstacleGroup.add(obstacle)
  obstacle.addImage("obstacle", cometImg)
  obstacle.scale=0.5
  obstacle.velocityX = 3
  obstacle.y = Math.round(random(10, 400))
  obstacle.x = Math.round(random(10, 200))

  if(obstacleGroup.isTouching(spaceship)) {
    lives -= 1
    obstacleGroup.destroyEach()
  }
}
}

function reset() {
    lives = 3
    obstacle.visible = true
    spaceship.scale = 0.5
    spaceship.x = 960
    spaceship.y = 540
    spaceship.changeImage("spaceship")

    if(keyIsDown(UP_ARROW)) {
      spaceship.y = spaceship.y-10
    }
  
    if(keyIsDown(RIGHT_ARROW)) {
      spaceship.x = spaceship.x+10
    }
  
    if(keyIsDown(LEFT_ARROW)) {
      spaceship.x = spaceship.x-10
    }
  
    if(keyIsDown(DOWN_ARROW)) {
      spaceship.y = spaceship.y+10
    }

spaceship.x = 370
spaceship.y = 300

resetButton.visible = false
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}