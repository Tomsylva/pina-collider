class Shark {

    constructor(){
        this.x = WIDTH;
        this.width = 300;
        this.height = 150; 
        this.y = random(0, HEIGHT - this.height);
    }

    draw() {
        image (sharkImage, this.x, this.y, this.width, this.height);
        this.x -= 20;
    }
}