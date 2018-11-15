class Bot {
    makeMove(gamestate) {
      let rand = Math.random();
      let move = '';

      if (rand <= 0.3){
        move = "R"
      } else if (rand > 0.3 && rand <= 0.6){
        move = "P"
      } else if (rand > 0.6 && rand <= 1){
        move = "S"
      }
      return move;
    }
}

module.exports = new Bot();
