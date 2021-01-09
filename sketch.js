const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var platform1, platform2;
var polygon;
var block;
var slingshot;
var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world=engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(550,height/1.5,200,10);
    platform2 = new Ground(950,height/2.5,200,10);

    polygon = new Polygon(150,300);

    slingshot = new SlingShot(polygon.body,{x:155, y:300});

}

 function draw(){
     background("lightblue")
    ground.display();
    platform1.display();
    platform2.display();

    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        console.log(gameState);
    }
}


function mouseReleased(){
    // Matter.Body.setPosition(polygon.body, {x: polygon.body.position.x, y: polygon.body.position.y})
    gameState = "launched";
    slingshot.fly();
    console.log("I am here")
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}