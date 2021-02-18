class Background {

    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
        this.left = 39;
        this.right = 37;
    }

    drunkMode = () => {

        // Should make crab move a little on it's own
        // this.x += (Math.floor(random(-2,2)));
        console.log("Heyooo")
        // Reverse key functions for when drunkMode is activated
        // this.left = 37;
        // this.right = 39;
    }
    

    draw(){
        // Regular key functions when drunkMode is not activated
        // This gets used a lot - maybe make into a single function and call it? 
        if(keyIsDown(this.left)){
            this.x -= SPEED;
        }

        if(keyIsDown(this.right)){
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