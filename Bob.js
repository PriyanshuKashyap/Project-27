class Bob {
    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.radius = 70;

        this.body = Bodies.circle(25, height - 10, this.radius, options);
        //this.img = loadImage("paper.png");//An error occured here
        //https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png
        //https://projectsassets.s3.us-east-2.amazonaws.com/paper.png
        World.add(world, this.body);
        //Task 3 can not be done unless the image is present. Task 3 requires image sizing through investigation, testing, and debugging.

    }

    display() {
        fill("rgb(255, 0, 255)");
        //push();
        //ellipse(this.body.position.x, this.body.position.y, 50, 50);
        //image(this.img, this.body.position.x, this.body.position.y + 27, 50, 50);
        //pop();
    }
}