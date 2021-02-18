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
    this.drunk = false;
  }

  setup() {}

  draw() {
    clear();

    // Increases score as long as crab is moving to the right
    if (keyIsDown(39)) {
      this.score++;
    }

    // Decreases score if crab is moving to the left
    if (keyIsDown(37)) {
      this.score--;
    }

    // Selects the score in the DOM
    const currentScore = document.querySelector("h1 span");
    //Changes score to this.score % 10 and adds a bonus for every drink powerup accumulated
    currentScore.innerText = (Math.floor(this.score / 10) + (this.drinks * 10));

    // Increases count for every drink accumulated and displayed on screen.
    const breathaliser = document.querySelector("h2 span");
    breathaliser.innerText = this.drinks;

    this.background.draw();
    this.bar.draw();
    this.player.draw();

    // SHARK LOGIC

    // Makes a shark appear randomly although rarely
    if (frameCount % Math.floor(random(5000)) === 0) {
      this.sharks.push(new Shark());
    }

    if (this.score < -50){
      this.sharks.push(new Shark());
    }

    this.sharks.forEach((shark, index) => {
      // Draws shark on screen
      shark.draw();

      // Removes hidden sharks from array
      if (shark.x + shark.width <= 0) {
        this.sharks.splice(index, 1);
      }

      if (this.collisionCheck(this.player, shark)) {
        
        // Stops the loop and game
        noLoop();

        // Creates a play again button
        const button = document.createElement("button");
        button.innerText = "Play again?";
        document.body.appendChild(button);
        button.onclick = () => {
          //ADD REFRESH FUNCTION IN MAIN.JS- to do
          restartGame();

          // Removes button from the browser
          button.parentNode.removeChild(button);
        };
      }
    });

    // COCONUT LOGIC
    // For notes, see SHARK LOGIC above

    if (frameCount % Math.floor(random(350)) === 0) {
      this.coconuts.push(new Coconut());
    }

    if (frameCount % Math.floor(random(2000)) === 0) {
      this.coconuts.push(new phatCoconut());
    }

    this.coconuts.forEach((coconut, index) => {
      coconut.draw();

      if (coconut.y >= HEIGHT || coconut.x + coconut.width <= 0) {
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

    // POWERUPS
    // For notes, see SHARK LOGIC above

    if (frameCount % Math.floor(random(3000)) === 0) {
      this.cocktails.push(new Cocktail());
    }
    this.cocktails.forEach((cocktail, index) => {
      cocktail.draw();
      if (cocktail.x + cocktail.width <= 0) {
        this.cocktails.splice(index, 1);
      }

      // Removes drink from screen when collision happens and increments drinks by 1
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

    // If this.drinks is more than 3, drunk is activated
    if (this.drinks >= 1) {
      this.drunk = true;
      breathaliser.innerText = "DRUNKMODE ACTIVATED!!";
      // background.drunkMode();
      this.background.left = 37;
      this.background.right = 39;
      //add a countdown clock from 20s - to do
      //this.drinks = 0;
      //this.drunk = false
      // ** LOGIC is already written in Background, just need to imnplement when this.drunk = true
    }
  }

  // countdown() {
  //   this.currentTime
  // https://thecodingtrain.com/CodingChallenges/066-timer.html

  // }

  collisionCheck(player, obstacle) {
    //   player.left + player.width (players.rightSide)
    //  if player's right side is to the left of the obstacle's left
    if (player.x + player.width < obstacle.x + 10) {
      return false;
    }

    //  obstacle's left and obstacle width (obstacle.rightSide)
    // if obstacle's right side is to the left of player's left
    if (obstacle.x + obstacle.width < player.x - 10) {
      return false;
    }

    // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    // player top side is below obstacle's bottom side
    if (player.y +10 > obstacle.y + obstacle.height) {
      return false;
    }

    //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //  obstacle top side is below the player's bottom side
    if (obstacle.y +10 > player.y + player.height) {
      return false;
    }
    return true;
  }

  keyIsPressed() {
    this.player.keyIsPressed();
  }
}
