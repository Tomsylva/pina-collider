class Bar {

    constructor(){
        this.x = 100;
        this.width = 300;
        this.height = 225; 
        this.y = 160;
    }

    draw() {
        image (barImage, this.x, this.y, this.width, this.height);
        if(keyIsDown(39)){
            this.x -=8;
        }

        if(keyIsDown(37)){
            this.x +=8;
        }
    }
}