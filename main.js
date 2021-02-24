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
  ammoImage = loadImage("./assets/beer2.png");
  emptyHands = loadImage("./assets/crab2.png");
  coconutSound = loadSound("./assets/CoconutSound.mp3");
  beerSound = loadSound("./assets/BeerSound.mp3");
  coctailSound = loadSound ("./assets/CocktailSound.mp3");
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
