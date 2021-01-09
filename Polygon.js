class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
      }
}