class Rope {
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.offsetX, y: this.offSetY},
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly() {
        //this.sling.bodyA = null;
    }

    display(){
        //if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            
            
        //}
        /*var pointA1 = this.rope.bodyA.position.x;
        var pointA2 = this.rope.bodyA.position.y;
        var pointB1 = this.rope.bodyB.position.x;
        var pointB2 = this.rope.bodyB.position.y;*/
        strokeWeight(4);
        line(pointA.x, pointA.y, this.offsetX, pointB.y);
        
    }
    
}
