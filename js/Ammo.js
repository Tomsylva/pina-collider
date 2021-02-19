class Ammo {

    constructor(){
        this.x = 145;
        this.width = 25;
        this.height = 60;
        this.y = 320; 
    }

    draw() {
        image (ammoImage, this.x, this.y, this.width, this.height);
    }

    keyPressed() {
        this.draw();
        if (keyCode === 32) {
        //   this.jump();
        }
      }
}