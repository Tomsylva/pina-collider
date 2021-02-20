class Ammo {
  constructor() {
    this.x = 145;
    this.width = 25;
    this.height = 60;
    this.y = 320;
    this.velocity = 0;
    this.angle = 0;
  }

  draw() {
    image(ammoImage, this.x, this.y, this.width, this.height);
    this.x += 15;
    this.y -= 12;

    this.velocity += GRAVITY;

    this.y += this.velocity;
  }
}
