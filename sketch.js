const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,score = 0;

var gameState = "onSling";

function preload() {
    getBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    cannon = new Cannon(100,250);
    bird = new Bird(300,350);
}

function draw(){
    if(backgroundImg) background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    bird.display();
    cannon.display();   
    
    textSize(30);
    text("score: " + score , width - 300,50);
    console.log(this.cannon.body);

    bird.depth = cannon.depth;
    cannon.depth = cannon.depth + 10;
}

/*function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}*/


/*function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}*/

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}


async function getBackground(){
       var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
       var responsejson = await response.json();
       var datetime = responsejson.datetime;
       console.log(datetime);
       var hour = datetime.slice(11,13);
       console.log(hour);
       if(hour >= 06 && hour <= 19){
           bg = "sprites/bg.png";
       }
       else{bg = "sprites/bg2.jpg" }

       backgroundImg = loadImage(bg);
}