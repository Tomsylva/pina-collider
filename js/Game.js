                // SAVE SCORE
                // CREATE BUTTON TO PLAY AGAIN
                // RESET GAME


class Game {

    constructor(){
        this.background = new Background;
        this.bar = new Bar;
        this.sharks = [];
        this.coconuts = [];
        this.player = new Player;
        this.score = 0;
    }

    setup(){

    }


     draw(){

        clear();

        if(keyIsDown(39)){
            this.score ++;
        };

        if(keyIsDown(37)){
            this.score --;
        }

        document.querySelector("h1 span").innerText = Math. floor(this.score / 10);

        this.background.draw();
        this.bar.draw();
        this.player.draw();

        // SHARK LOGIC

        if (frameCount % 400 === 0){
            this.sharks.push(new Shark());
        } 

        this.sharks.forEach((shark, index) => {
            shark.draw(); 

            if(shark.x + shark.width <= 0){
                this.sharks.splice(index, 1);
            }

            if(this.collisionCheck(this.player, shark)){
                noLoop();
                const button = document.createElement("button");
                button.innerText = "Play again?"
                document.body.appendChild(button);
                button.onclick = () => {
                    //ADD REFRESH FUNCTION
                    restartGame();
                    button.parentNode.removeChild(button);
                }
            }

        });

        // COCONUT LOGIC

        if(frameCount % 30 === 0){
            this.coconuts.push(new Coconut());
        }
        
        this.coconuts.forEach((coconut, index) => {
            coconut.draw();

            if(coconut.x + coconut.width <= 0){
                this.coconuts.splice(index, 1);
            }

            if(this.collisionCheck(this.player, coconut)){
                noLoop();
                const button = document.createElement("button");
                button.innerText = "Play again?"
                document.body.appendChild(button);
                button.onclick = () => {
                    //ADD REFRESH FUNCTION
                    restartGame();
                    button.parentNode.removeChild(button);
                }
            }
        })
     }

    collisionCheck(player, obstacle){

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

    keyIsPressed(){
        this.player.keyIsPressed();
    }

}