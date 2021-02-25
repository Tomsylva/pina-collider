class Shark {

    constructor(){
        this.x = WIDTH;
        this.width = 300;
        this.height = 150; 
        this.y = random(0, HEIGHT - this.height); // Makes shark appear at random onscreen Y value
    }

    draw() {
        image (sharkImage, this.x, this.y, this.width, this.height);
        this.x -= 20;
        if(this.x === WIDTH - 20){
            sharkSound.setVolume(0.8);
            sharkSound.play();
        }
    }
}