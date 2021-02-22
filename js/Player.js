class Player {
  constructor() {
    this.x = 80;
    this.y = constantY;
    this.width = 80;
    this.height = 60;
    this.floor = 330;
    this.velocity = 0;
    this.jumpCount = 0;
    this.fire = false;
    this.missile = new Ammo();
  }

  // when up key is pressed, jump is called
  keyPressed() {
    if (keyCode === up) {
      this.jump();
    }
    if (keyCode === 32) {
      this.fire = true;
    }
  }

  // makes crab jump
  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.jumpCount++;
    constantY -= 10;
    this.velocity -= 8;
  }

  draw() {
    this.velocity += GRAVITY;

    this.y += this.velocity;

    if (this.y >= this.floor) {
      this.y = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }

    image(
      this.fire === false ? crabImage : emptyHands,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (this.fire) {
      this.missile.draw();
    }
  }
}
