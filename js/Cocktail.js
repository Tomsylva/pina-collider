class Cocktail {
  constructor() {
    this.x = WIDTH;
    this.width = 50;
    this.height = 60;
    this.y = 330;
  }

  draw() {
    // This ensure the drinks stay in the same "y" position, even when the crab is moving
    // This gets used a lot - maybe make into a single function and call it? 
    if (keyIsDown(left)) {
      this.x -= SPEED;
    }

    if (keyIsDown(right)) {
      this.x += SPEED;
    }

    image(cocktailImage, this.x, this.y, this.width, this.height);
  }
}
