// SAVE SCORE
// CREATE BUTTON TO PLAY AGAIN
// RESET GAME

class Game {
  constructor() {
    this.background = new Background();
    this.bar = new Bar();
    this.sharks = [];
    this.coconuts = [];
    this.cocktails = [];
    this.brewskis = [];
    this.player = new Player();
    this.score = 0;
    this.drinks = 0;
    this.drunkMode = false;
  }

  setup() {}

  draw() {
    clear();

    if (keyIsDown(39)) {
      this.score++;
    }

    if (keyIsDown(37)) {
      this.score--;
    }

    const currentScore = document.querySelector("h1 span");
    currentScore.innerText = (Math.floor(this.score / 10) + (this.drinks * 10));
    const breathaliser = document.querySelector("h2 span");
    breathaliser.innerText = this.drinks;

    this.background.draw();
    this.bar.draw();
    this.player.draw();

    // SHARK LOGIC

    if (frameCount % Math.floor(random(5000)) === 0) {
      this.sharks.push(new Shark());
    }

    this.sharks.forEach((shark, index) => {
      shark.draw();

      if (shark.x + shark.width <= 0) {
        this.sharks.splice(index, 1);
      }

      if (this.collisionCheck(this.player, shark)) {
        noLoop();
        const button = document.createElement("button");
        button.innerText = "Play again?";
        document.body.appendChild(button);
        button.onclick = () => {
          //ADD REFRESH FUNCTION
          restartGame();
          button.parentNode.removeChild(button);
        };
      }
    });

    // COCONUT LOGIC

    if (frameCount % Math.floor(random(200)) === 0) {
      this.coconuts.push(new Coconut());
    }

    this.coconuts.forEach((coconut, index) => {
      coconut.draw();

      if (coconut.x + coconut.width <= 0) {
        this.coconuts.splice(index, 1);
      }

      if (this.collisionCheck(this.player, coconut)) {
        noLoop();
        const button = document.createElement("button");
        button.innerText = "Play again?";
        document.body.appendChild(button);
        button.onclick = () => {
          //ADD REFRESH FUNCTION
          restartGame();
          button.parentNode.removeChild(button);
        };
      }
    });

    //POWERUPS

    if (frameCount % Math.floor(random(3000)) === 0) {
      this.cocktails.push(new Cocktail());
    }
    this.cocktails.forEach((cocktail, index) => {
      cocktail.draw();
      if (cocktail.x + cocktail.width <= 0) {
        this.cocktails.splice(index, 1);
      }
      if (this.collisionCheck(this.player, cocktail)) {
        this.cocktails.splice(index, 1);
        this.drinks += 1;
      }
    });

    if (frameCount % Math.floor(random(3000)) === 0) {
      this.brewskis.push(new Beer());
    }
    this.brewskis.forEach((beer, index) => {
      beer.draw();
      if (beer.x + beer.width <= 0) {
        this.brewskis.splice(index, 1);
      }
      if (this.collisionCheck(this.player, beer)) {
        this.brewskis.splice(index, 1);
        this.drinks += 1;
      }
    });

    if (this.drinks == 3) {
      this.drunkMode = true;
      breathaliser.innerText = "DRUNKMDE ACTIMATED";
    }
  }

  collisionCheck(player, obstacle) {
    //   player.left + player.width (players.rightSide)
    //  if player's right side is to the left of the obstacle's left
    if (player.x + player.width < obstacle.x) {
      return false;
    }

    //  obstacle's left and obstacle width (obstacle.rightSide)
    // if obstacle's right side is to the left of player's left
    if (obstacle.x + obstacle.width < player.x) {
      return false;
    }

    // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    // player top side is below obstacle's bottom side
    if (player.y > obstacle.y + obstacle.height) {
      return false;
    }

    //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //  obstacle top side is below the player's bottom side
    if (obstacle.y > player.y + player.height) {
      return false;
    }
    return true;
  }

  keyIsPressed() {
    this.player.keyIsPressed();
  }
}
