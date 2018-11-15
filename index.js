//Testing ground for code

const fs = require('fs');
const gamestateJSON = fs.readFileSync( './download.json' , {encoding: 'UTF-8'});
const gamestate = JSON.parse(gamestateJSON);


function randomMoveSelect(){
    let rand = Math.random();
    let move = '';


    if (rand <= 0.3){
      move = "R"
    } else if (rand > 0.3 && rand <= 0.6){
      move = "P"
    } else if (rand > 0.6 && rand <= 1){
      move = "S"
    }
}

let firstRound = gamestate.rounds[0]
let lastRound = gamestate.rounds[gamestate.rounds.length-1]




let countMyD = 0,
    // countMyR = 0
//etc...


gamestate.rounds.forEach( round => { //Count own use of D - self is P1
  if(round.p1 === 'D'){
    countMyDynamites += 1;
  }
})
