class Block{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
        rectMode(CENTER)
        fill(20, 20, 255)
        rect(this.body.position.x, this.body.position.y, 25, 40);
    }
}