class Bar {

    constructor(){
        this.x = 100;
        this.width = 300;
        this.height = 225; 
        this.y = 160;
    }

    draw() {
        image (barImage, this.x, this.y, this.width, this.height);

        // This makes the image of the bar move offscreen when the crab runs forwards
        // This gets used a lot - maybe make into a single function and call it? 
        if(keyIsDown(39)){
            this.x -= SPEED;
        }
        if(keyIsDown(37)){
            this.x += SPEED;
        }
    }
}