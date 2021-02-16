class Player {
  constructor() {
    this.x = 80;
    this.y = 330;
    this.width = 80;
    this.height = 60;
    this.floor = 330;
    this.velocity = 0;
    this.jumpCount = 0;
  }

  // when up key is pressed, jump is called
  keyPressed() {
    if (keyCode === 38) {
      this.jump();
    }
  }

// makes crab jump
  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.jumpCount++;
    this.y -= 10;
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

    image(crabImage, this.x, this.y, this.width, this.height);
  }
}
