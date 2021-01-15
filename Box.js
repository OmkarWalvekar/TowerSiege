class Box{
    constructor(x,y,width,height){
        var opts_body = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,opts_body);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;

        //Rotating the Box
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("purple");
        strokeWeight(3);
        stroke("cyan");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        pop();
    }
}