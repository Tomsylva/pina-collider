class Coconut {
  constructor() {
    this.x = random(0, WIDTH);
    this.width = 50;
    this.height = 50;
    this.y = 0 - this.height;
    this.velocity = 0;
    this.floor = 330;
    this.bounces = 0;
  }

  draw() {
    this.velocity += 0.3;
    this.y += this.velocity;

    // This ensure the coconuts fall in the same "y" position
    // This gets used a lot - maybe make into a single function and call it?
    if (keyIsDown(left)) {
      this.x -= SPEED;
    }

    if (keyIsDown(right)) {
      this.x += SPEED;
    }

    if (this.y > this.floor) {
      if (this.bounces === 0) {
        this.y -= 10;
        this.velocity -= 22;
        this.bounces += 1;
        coconutSound.setVolume(0.9);
        coconutSound.play();
      }
    }

    image(coconutImage, this.x, this.y, this.width, this.height);
  }
}

class phatCoconut extends Coconut {
  constructor(x, width, height, y, velocity, floor, bounces) {
    super(x, width, height, y, velocity, floor, bounces);
    this.draw = () => {
      this.velocity += 0.5;
      this.y += this.velocity;

      // This ensure the coconuts fall in the same "y" position
      // This gets used a lot - maybe make into a single function and call it?
      if (keyIsDown(left)) {
        this.x -= SPEED;
      }

      if (keyIsDown(right)) {
        this.x += SPEED;
      }

      if (this.y > 350) {
        this.y = 350;
        if (this.bounces === 0) {
          coconutSound.play();
          this.bounces = 1;
        }
      }

      image(coconutImage, this.x, this.y, this.width, this.height);
    };
  }
}
