class MyCounter {
    constructor(){
    this.d = 0;
    this.w = 0;
    this.r = 0;
    this.p = 0;
    this.s = 0;
    }

    countMoves(gamestate){
        gamestate.rounds.forEach( round => { //Count own use of D - self is P1
          if(round.p1 === 'D'){
              this.d +=1;
          } else if(round.p1 === 'W'){
              this.w +=1;
          } else if(round.p1 === 'R'){
              this.r +=1;
          } else if(round.p1 === 'P'){
              this.p +=1;
          }  else if(round.p1 === 'S'){
              this.s +=1;
          }

        })
      }
}
class TheirCounter {
    constructor(){
    this.d = 0;
    this.w = 0;
    this.r = 0;
    this.p = 0;
    this.s = 0;
    }

    countMoves(gamestate){
        gamestate.rounds.forEach( round => { //Count own use of D - self is P1
          if(round.p2 === 'D'){
              this.d +=1;
          } else if(round.p2 === 'W'){
              this.w +=1;
          } else if(round.p2 === 'R'){
              this.r +=1;
          } else if(round.p2 === 'P'){
              this.p +=1;
          }  else if(round.p2 === 'S'){
              this.s +=1;
          }

        })
      }
}
class PointsCounter {
    constructor(){
      this.p1Points = 0;
      this.p2Points = 0;
    }

    countPoints(gamestate){
      // console.log('calculating points');
      const reRPS = /R|P|S/;
      let roundPoints = 1;

      gamestate.rounds.forEach( round => {
        // console.log('P1:' + round.p1 + '  P2:' + round.p2);

        if (round.p1 === round.p2){
          //no points
          // console.log('Draw')
          roundPoints += 1
          return
        }

        if (round.p1 === 'D' && round.p2 !== 'W'){
          // console.log('P1 wins')
          this.p1Points += roundPoints;
          roundPoints = 1;
          return
        } else if (round.p2 === 'D' && round.p1 !== 'W'){
            // console.log('P2 wins')
            this.p2Points += roundPoints;
            roundPoints = 1;
            return
          }

          if (round.p1 === 'W' && round.p2 === 'D'){
            // console.log('P1 wins')
            this.p1Points += roundPoints;
            roundPoints = 1;
            return
          } else if (round.p2 === 'W' && round.p1 === 'D'){
            // console.log('P2 wins')
            this.p2Points += roundPoints;
            roundPoints = 1;
            return
          }

        if (round.p1 === 'W' && reRPS.exec(round.p2)){
          // console.log('P2 wins')
          this.p2Points += roundPoints;
          roundPoints = 1;
          return
        } else if (round.p2 === 'W' && reRPS.exec(round.p1)){
          // console.log('P1 wins')
          this.p1Points += roundPoints;
          roundPoints = 1;
          return
        }

        if (round.p1 === 'R' && round.p2 === 'S'){
          // console.log('P1 wins')
          this.p1Points += roundPoints;
          roundPoints = 1;
          return
        } else if (round.p1 === 'R' && round.p2 === 'P'){
          // console.log('P2 wins')
          this.p2Points += roundPoints;
          roundPoints = 1;
          return
        }

        if (round.p1 === 'P' && round.p2 === 'R'){
          // console.log('P1 wins')
          this.p1Points += roundPoints;
          roundPoints = 1;
          return
        } else if (round.p1 === 'P' && round.p2 === 'S'){
          // console.log('P2 wins')
          this.p2Points += roundPoints;
          roundPoints = 1;
          return
        }

        if (round.p1 === 'S' && round.p2 === 'P'){
          // console.log('P1 wins')
          this.p1Points += roundPoints;
          roundPoints = 1;
          return
        } else if (round.p1 === 'S' && round.p2 === 'R'){
          // console.log('P2 wins')
          this.p2Points += roundPoints;
          roundPoints = 1;
          return
        }
      })
    }


}
class RoundPoints {
  constructor(){
    this.roundPoints = 1;
  }

  calculateRoundPoints(gamestate){
      gamestate.rounds.forEach( round => {
        if (round.p1 === round.p2){
          this.roundPoints += 1;
        } else {
          this.roundPoints = 1;
        }
      })
    }
}
class RepeaterDetector{
  constructor(){
    this.lastRounds = [];
    this.repeating = false;
    this.repeatMove = '';
    this.responseMove = '';
  }



  analyseLastFewRounds(gamestate){
    let length = gamestate.rounds.length,
        i = 3;

    if (length > i){

        for (let i=3; i>0; i--){
          this.lastRounds.push(gamestate.rounds[length-i].p2)
        }

        let unique = this.lastRounds.filter( function (value, index, self) {
          return self.indexOf(value) === index;
        } );

        if (unique.length === 1){
          this.repeating = true;
          this.repeatMove = unique[0];
        }
      }

  }

  randomMoveSelect(){
      let rand = Math.random();
      let move = '';


      if (rand <= 0.3){
        move = "R"
      } else if (rand > 0.3 && rand <= 0.6){
        move = "P"
      } else if (rand > 0.6 && rand <= 1){
        move = "S"
      }

      this.responseMove = move;
  }

  responseMoveDecider(){
    switch(this.repeatMove){
      case 'R':
        this.responseMove = 'P'
        break

      case 'P':
        this.responseMove = 'S';
        break;

      case 'S':
        this.responseMove = 'R';
        break;

      case 'D':
        this.responseMove = 'W';
        break;

      case 'W':
        this.randomMoveSelect();
        break;

      default:
        this.randomMoveSelect();
        break;
    }
  }

}

class WaterDowser {
  constructor(){
    this.tieRoundsIndices =[];
    this.itsEmily = false;
    this.notCalledOutEmily = true;
  }

  findTieRounds(gamestate){
      let i=0;
      gamestate.rounds.forEach( round => {
        if (round.p1 === round.p2){
          this.tieRoundsIndices.push(i);
        }
        i += 1;
    })
  }

  isItEmily(gamestate){
        let length = this.tieRoundsIndices.length;
        let numberElapsedRounds = gamestate.rounds.length;
        if (length < 3 ){
        } else if ( numberElapsedRounds > 6 && (false) ) {
            let firstTieResponse = gamestate.rounds[this.tieRoundsIndices[1]].p2;
            let secondTieResponse = gamestate.rounds[this.tieRoundsIndices[2]].p2;
            let thirdTieResponse = gamestate.rounds[this.tieRoundsIndices[3]].p2;

            if (firstTieResponse === 'W' && secondTieResponse === 'W' && thirdTieResponse === 'W'){
              this.itsEmily = true;
            }
          }
        }

   doesSheKnow(gamestate){
     let length = this.tieRoundsIndices.length;
     if (this.itsEmily){
       if (lastResponseTie = gamestate.rounds[this.tieRoundsIndices[length-2]].p2 !== 'W'){
         this.notCalledOutEmily = false;
       }
     }
   }
}


class Bot {
    makeMove(gamestate) {
      let myCounter = new MyCounter(),
          theirCounter = new TheirCounter(),
          points = new PointsCounter(),
          roundPoints = new RoundPoints(),
          repeaterDetector = new RepeaterDetector(),
          waterDowser = new WaterDowser();

      myCounter.countMoves(gamestate);
      theirCounter.countMoves(gamestate);
      points.countPoints(gamestate);
      roundPoints.calculateRoundPoints(gamestate);
      repeaterDetector.analyseLastFewRounds(gamestate);
      waterDowser.findTieRounds(gamestate);
      waterDowser.isItEmily(gamestate);
      waterDowser.doesSheKnow(gamestate);


      let rand = Math.random();
      let move = '';
      let throwDynamite = true;
      let throwWaterBalloon = true;

      let myDynamitesLeft = 100 - myCounter.d
      if (myDynamitesLeft === 0){
        throwDynamite = false;
      }
      let theirDynamitesLeft = 100 - theirCounter.d
      if (theirDynamitesLeft === 0){
        throwWaterBalloon = false;
      }

      if (repeaterDetector.repeating){
        repeaterDetector.responseMoveDecider();
        move = repeaterDetector.responseMove;
        return move;
      } else {

            if (roundPoints.roundPoints > 2 && !waterDowser.itsEmily && throwWaterBalloon ){
              move = "W"
            }else if (roundPoints.roundPoints > 2 && throwDynamite){
              move = "D"
            } else if (roundPoints.roundPoints > 1 && throwDynamite && (myDynamitesLeft >=20) && !waterDowser.itsEmily && waterDowser.notCalledOutEmily){
              move = "D"
            } else if (points.p2Points > 970 && throwDynamite){
              move = "D"
            } else if (rand <= 0.1 && throwDynamite && myDynamitesLeft > 20){
              move = "D"
            } else if (rand > 0.1 && rand <= 0.4){
              move = "R"
            } else if (rand > 0.4 && rand <= 0.7){
              move = "P"
            } else if (rand > 0.7 && rand <= 1){
              move = "S"
            } else {
              move = "P"
            }
          }

      return move;
    }
}

module.exports = new Bot();
