class Background {

    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
    }

    draw(){

        // this.x -= 3; // - this line should not be needed, moves background automatically
        
        if(keyIsDown(39)){
            this.x -=8;
        }

        if(keyIsDown(37)){
            this.x +=8;
        }
        
        // CENTRAL IMAGE
         image(bgImage, this.x, this.y, this.width, this.height);
        // RIGHT IMAGE
         image(bgImage, this.x + this.width, this.y, this.width, this.height);
        // LEFT IMAGE
         image(bgImage, this.x - this.width, this.y, this.width, this.height);

         if (this.x <= - this.width){
             this.x = 0;
         }
         

    }

// INSERT MOVEMENT LOGIC - KEY WILL CONTROL BACKGROUND, CHARACTER WILL STAY IN SAME PLACE

        // 2 X MODES 
        //- SOBER MODE (controls are obvious)
        // 38 is jump - maybe this is done in player and background is static
        // 37 is left
        // 39 is right

        //- DRUNK MODE (controls are reversed)
        // 40 is jump - maybe this is done in player and background is static
        // 39 is left
        // 37 is right
}