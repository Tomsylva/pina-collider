class Background {

    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
    }
    
    draw(){
        // Regular key functions when drunkMode is not activated
        // This gets used a lot - maybe make into a single function and call it? 
        if(keyIsDown(left)){
            this.x -= SPEED;
        }

        if(keyIsDown(right)){
            this.x += SPEED;
        }
        
        // CENTRAL IMAGE
         image(bgImage, this.x, this.y, this.width, this.height);
        // RIGHT IMAGE
         image(bgImage, this.x + this.width, this.y, this.width, this.height);
        // LEFT IMAGE
         image(bgImage, this.x - this.width, this.y, this.width, this.height);


         // These ensure there is always a scrolling background in either direction
         if (this.x <= - this.width){
             this.x = 0;
         }

         if (this.x >= + this.width){
            this.x = 0;
        }
         

    }
}