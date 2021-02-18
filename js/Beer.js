class Beer {

    constructor(){
        this.x = WIDTH;
        this.width = 25;
        this.height = 60;
        this.y = 330; 
    }

    draw() {
        // This ensure the beer stays in the same "y" position
        // This gets used a lot - maybe make into a single function and call it? 
        if(keyIsDown(left)){
            this.x -= SPEED;
        }
        if(keyIsDown(right)){
            this.x += SPEED;
        }

        image (beerImage, this.x, this.y, this.width, this.height);
    }
}