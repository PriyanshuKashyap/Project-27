class Bob {
    constructor() {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.radius = 70;

        this.body = Bodies.circle(25, height - 24, this.radius, options);
        
        World.add(world, this.body);
        //fill("rgb(255, 0, 255)");
    }

    display() {
        fill("rgb(255, 0, 255)");
        ellipse(this.body.position.x, this.body.position.y, 50, 50);
    }
}
