class Coconut {

    constructor(){
        this.x = random(0, WIDTH);
        this.width = 50;
        this.height = 50;
        this.y = 0 - this.height; 
        this.velocity = 0;
        this.floor = 330;
        this.bounces = 0;
    }

    draw() {
        this.velocity += 0.3;
        this.y += this.velocity;

        // This ensure the coconuts fall in the same "y" position
        if(keyIsDown(39)){
            this.x -=8;
        }

        if(keyIsDown(37)){
            this.x +=8;
        }

        if(this.y > this.floor){
            if(this.bounces === 0){
            this.y -= 10;
            this.velocity -= 22;
            this.bounces += 1;
            }
        }

        image (coconutImage, this.x, this.y, this.width, this.height);
    }
}