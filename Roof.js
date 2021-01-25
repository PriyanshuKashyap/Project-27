class Roof {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(width/2, height - 667, width, 20, options);

        World.add(world, this.body);
    }

    display() {
        fill("grey");
        //push();
        rect(this.body.position.x, this.body.position.y, width, 20);
        //pop();
    }
}
