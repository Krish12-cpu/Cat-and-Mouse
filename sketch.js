var cat, catSitting, catRunning, catImage,mouse, mouseImage, mouseDancing, mouseSitting,gardenImage

function preload() {
    catImage = loadAnimation("images/cat1.png")
    catRunning = loadAnimation("images/cat2.png","images/cat3.png")
    catSitting = loadAnimation("images/cat4.png")
    mouseImage = loadAnimation("images/mouse1.png")
    mouseDancing = loadAnimation("images/mouse2.png", "images/mouse4.png")
    mouseHappy = loadAnimation("images/mouse3.png")
    gardenImage = loadAnimation("images/garden.png")
 
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400)
    garden.addAnimation("bg",gardenImage)
    garden.scale = 1.3
    cat = createSprite(900,700,40,20)
    cat.addAnimation("ci",catImage);
    cat.addAnimation("cr",catRunning)
    cat.addAnimation("cs",catSitting)
    cat.scale = 0.13
    mouse = createSprite(100,700)
    mouse.scale=0.09
    mouse.addAnimation("mi",mouseImage)
    mouse.addAnimation("mh",mouseHappy)
    mouse.addAnimation("md",mouseDancing)
}

function draw() {
    text("cat" ,cat.x,500,400)
    text("mouse" ,mouse.x,700,200)
    if(cat.x-mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.changeAnimation("cs",catSitting)
        mouse.changeAnimation("mh",mouseHappy)
        cat.x = 250;
    }
    background(25);  
    drawSprites();
}


function keyPressed(){
    if(keyDown("left")){
        cat.changeAnimation("cr",catRunning)
        cat.velocityX = -3 
        mouse.changeAnimation("md",mouseDancing)
    }
}
