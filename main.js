const game = new Game();

function preload() {
  bgImage = loadImage("./assets/background2.jpg");
  crabImage = loadImage("./assets/crab.png");
  coconutImage = loadImage("./assets/coconut.png");
  sharkImage = loadImage("./assets/shark3.png");
  beerImage = loadImage("./assets/beer.png");
  cocktailImage = loadImage("./assets/cocktail.png");
  barImage = loadImage("./assets/bar.png");
}

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {
  game.player.keyPressed();
}

// This function needs fixing but is called every time the restart button is pushed
function restartGame() {
  remove();
  game.draw();
}
