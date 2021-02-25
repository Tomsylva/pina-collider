const breathaliser = document.querySelector("h2 span");

class Game {
  constructor() {
    this.background = new Background();
    this.bar = new Bar();
    this.sharks = [];
    this.coconuts = [];
    this.cocktails = [];
    this.brewskis = [];
    this.missile = new Ammo();
    this.player = new Player();
    this.score = 0;
    this.bonus = 0;
    this.drinks = 0;
    this.drunk = false;
    this.secondsToSober = 5;
  }

  setup() {}

  draw() {
    clear();

    // Increases score as long as crab is moving to the right
    if (keyIsDown(left)) {
      this.score++;
    }

    // Decreases score if crab is moving to the left
    if (keyIsDown(right)) {
      this.score--;
    }

    if (this.player.fire) {
      this.missile.draw();
    }

    // Selects the seconds until sober in the DOM
    // const timeToSober = document.querySelector("h3 .timer");

    // Selects breathaliser score in the DOM
    const breathaliser = document.querySelector("h3 span");

    // Selects the score in the DOM
    const currentScore = document.querySelector("h2 span");

    // Selects the top score in the DOM
    const highScore = document.querySelector("h2 .top-score");

    //Changes score to this.score % 10 and adds a bonus for every drink powerup accumulated
    currentScore.innerText = Math.floor(this.score / 10) + this.bonus * 10;

    if (this.score / 10 + this.bonus * 10 > topScore) {
      highScore.innerText = Math.floor(this.score / 10 + this.bonus * 10);
    }

    this.background.draw();
    this.bar.draw();
    this.player.draw();

    // SHARK LOGIC

    // Makes a shark appear randomly although rarely
    if (frameCount % Math.floor(random(5000)) === 0) {
      this.sharks.push(new Shark());
    }

    if (this.score < -50) {
      this.sharks.push(new Shark());
      this.bonus = -1000;
    }

    this.sharks.forEach((shark, index) => {
      // Draws shark on screen
      shark.draw();

      // Removes hidden sharks from array
      if (shark.x + shark.width <= 0) {
        this.sharks.splice(index, 1);
      }

      if (
        this.collisionCheck(this.missile, shark) &&
        this.player.fire === true
      ) {
        this.sharks.splice(index, 1);
        this.bonus += 15;
        const message = document.createElement("h3");
        message.innerText = "Bullseye! +150 points";;
        beerSound.play();
        document.body.appendChild(message);
        setTimeout(function(){
          message.parentNode.removeChild(message);
        },1000);
      }

      if (this.collisionCheck(this.player, shark)) {
        // Stops the loop and game
        noLoop();
        if (this.score / 10 + this.bonus * 10 > topScore){
          highScoreSound.play();
        }
        drunkDrums.stop();
        // Creates a play again button
        const message = document.createElement("h3");
        message.innerText = "Shark Attack!";
        cocktailSound.play();
        const button = document.createElement("button");
        button.innerText = "Play again?";
        document.body.appendChild(message)
        document.body.appendChild(button);
        button.onclick = () => {
          //ADD REFRESH FUNCTION IN MAIN.JS
          this.restartGame();

          // Removes button from the browser
          button.parentNode.removeChild(button);
          message.parentNode.removeChild(message);
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
        if (this.score / 10 + this.bonus * 10 > topScore){
          highScoreSound.play();
        }
        drunkDrums.stop();
        const message = document.createElement("h3");
        coconutSound.play();
        message.innerText = "Knockout!";
        const button = document.createElement("button");
        button.innerText = "Play again?";
        document.body.appendChild(message);
        document.body.appendChild(button);
        button.onclick = () => {
          //ADD REFRESH FUNCTION
          this.restartGame();
          button.parentNode.removeChild(button);
          message.parentNode.removeChild(message);
        };
      }
    });

    // POWERUPS
    // For notes, see SHARK LOGIC above

    if (frameCount % Math.floor(random(1500)) === 0) {
      this.cocktails.push(new Cocktail());
    }
    this.cocktails.forEach((cocktail, index) => {
      cocktail.draw();
      if (cocktail.x + cocktail.width <= 0) {
        this.cocktails.splice(index, 1);
      }

      // Removes drink from screen when collision happens and increments drinks by 1
      if (this.collisionCheck(this.player, cocktail)) {
        this.bonus += 1;
        this.cocktailHour();
        cocktailSound.setVolume(0.2);
        cocktailSound.play();
        const message = document.createElement("h4");
        message.innerText = "Cocktail Time! +10 points";;
        document.body.appendChild(message);
        setTimeout(function(){
          message.parentNode.removeChild(message);
        },1000);
      }
    });

    if (frameCount % Math.floor(random(1500)) === 0) {
      this.brewskis.push(new Beer());
    }
    this.brewskis.forEach((beer, index) => {
      beer.draw();
      if (beer.x + beer.width <= 0) {
        this.brewskis.splice(index, 1);
      }
      if (this.collisionCheck(this.player, beer)) {
        this.bonus += 1;
        this.drinkUp();
        beerSound.play();
        const message = document.createElement("h4");
        message.innerText = "Cheers! +10 points";;
        document.body.appendChild(message);
        setTimeout(function(){
          message.parentNode.removeChild(message);
        },1000);
      }
    });

    if (this.drunk) {
      breathaliser.innerText = "Too much to drive!";
      // timeToSober.innerText = this.secondsToSober;
      left = 37;
      right = 39;
      up = 40;
      this.background.x += random(-10, 10);
    } else {
      left = 39;
      right = 37;
      up = 38;
      breathaliser.innerText = this.drinks;
      // timeToSober.innerText = "Sober!";
    }
  }

  restartGame() {
    if (this.score / 10 + this.bonus * 10 > topScore) {
      topScore = this.score / 10 + this.bonus * 10;
    }
    this.missile = new Ammo();
    this.player = new Player();
    this.player.fire = false;
    this.cocktails = [];
    this.coconuts = [];
    this.sharks = [];
    this.brewskis = [];
    this.background = new Background();
    this.score = 0;
    this.bonus = 0;
    this.drinks = 0;
    this.drunk = false;
    this.secondsToSober = 5;
    this.bar = new Bar();
    this.draw();
    loop();
  }

  drinkUp() {
    this.brewskis.splice(this.index, 1);
    this.drinks += 1;
    if (this.drinks === 3) {
      this.secondsToSober = 5;
      this.drunk = true;
      drunkDrums.setVolume(0.6);
      drunkDrums.loop();
      setTimeout(() => {
        drunkDrums.pause();
        this.drunk = false;
        this.drinks = 0;
      }, 5000);
    }
  }

  cocktailHour() {
    this.cocktails.splice(this.index, 1);
    this.drinks += 1;
    if (this.drinks === 3) {
      this.secondsToSober = 5;
      this.drunk = true;
      drunkDrums.setVolume(0.6);
      drunkDrums.loop();
      setTimeout(() => {
        drunkDrums.stop();
        this.drunk = false;
        this.drinks = 0;
      }, 5000);
    }
  }

  collisionCheck(player, obstacle) {
    //   player.left + player.width (players.rightSide)
    //  if player's right side is to the left of the obstacle's left
    if (player.x + player.width < obstacle.x + 10) {
      return false;
    }

    //  obstacle's left and obstacle width (obstacle.rightSide)
    // if obstacle's right side is to the left of player's left
    if (obstacle.x + obstacle.width < player.x + 10) {
      return false;
    }

    // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    // player top side is below obstacle's bottom side
    if (player.y + 10 > obstacle.y + obstacle.height) {
      return false;
    }

    //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //  obstacle top side is below the player's bottom side
    if (obstacle.y + 10 > player.y + player.height) {
      return false;
    }
    return true;
  }
}
