class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //stroke("rgb(10,10,10)");
            strokeWeight(5);
            stroke("white");

            if(pointA.x < 220)
            {
                line(pointA.x -25 , pointA.y, pointB.x -10, pointB.y);
                line(pointA.x -20 , pointA.y, pointB.x +30, pointB.y - 4);
                
            }
            else
            {
                line(pointA.x +25 , pointA.y, pointB.x -10, pointB.y);
                line(pointA.x +25 , pointA.y, pointB.x +30, pointB.y - 4);
                
            }
            pop();
        }
    }
    
}