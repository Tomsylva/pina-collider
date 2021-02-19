const game = new Game();
const newGame = new Game();

function preload() {
  bgImage = loadImage("./assets/background2.jpg");
  crabImage = loadImage("./assets/crab.png");
  coconutImage = loadImage("./assets/coconut.png");
  sharkImage = loadImage("./assets/shark4.png");
  beerImage = loadImage("./assets/beer.png");
  cocktailImage = loadImage("./assets/cocktail.png");
  barImage = loadImage("./assets/bar.png");
  ammoImage = loadImage("./assets/beer2.png")
}

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {
  game.player.keyPressed();
  // game.bottle.keyPressed();
}

// This function needs fixing but is called every time the restart button is pushed
function restartGame() {
  // remove();
  this.game.redraw();
}
