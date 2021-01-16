class Bob{
    constructor (x,y,r){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 0,
            density: 1.2
    }
    this.x = x;
    this.y = 600;
    this.r = 100;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
     World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop()
    }
};