class Beer {

    constructor(){
        this.x = WIDTH;
        this.width = 30;
        this.height = 60;
        this.y = 330; 
    }

    draw() {
        // This ensure the coconuts fall in the same "y" position
        if(keyIsDown(39)){
            this.x -=8;
        }

        if(keyIsDown(37)){
            this.x +=8;
        }

        image (beerImage, this.x, this.y, this.width, this.height);
    }
}