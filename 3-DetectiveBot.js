class Bot {
    makeMove(gamestate) {
      const rand = Math.random();
      let move = '';

      if (gamestate.rounds.length === 0){ //check if no previous rounds
        return "D"
      } else {

          if (rand <= 0.3){
            move = "S"
          } else if (rand > 0.3 && rand <= 0.6){
            move = "S"
          } else if (rand > 0.6 && rand <= 1){
            move = "S"
          }
          return move;
      }
    }
}
module.exports = new Bot();
