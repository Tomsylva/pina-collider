class Ammo {
  constructor(playerYPosition = 330) {
    this.x = 145;
    this.width = 25;
    this.height = 60;
    this.y = playerYPosition;
    this.velocity = 0;
    this.angle = 0; //FOR ROTATION - delete if not used
  }

  draw() {

    push();
    // imageMode(CENTER);
    // angleMode(DEGREES);
    this.velocity += GRAVITY;
    this.y += this.velocity;
    // translate(this.x, this.y);
    // rotate(this.angle);
    image(ammoImage, this.x, this.y, this.width, this.height);
    this.x += 15;
    this.y -= 12;
    // this.angle += 1;
    pop();
  }
}
