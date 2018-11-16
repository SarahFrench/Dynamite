//Testing ground for code

const fs = require('fs');
const gamestateJSON = fs.readFileSync( './download (2).json' , {encoding: 'UTF-8'});
const gamestate = JSON.parse(gamestateJSON);



// class RepeaterDetector{
//   constructor(){
//     this.lastRounds = [];
//     this.repeating = false;
//     this.repeatMove = '';
//     this.responseMove = '';
//   }
//
//
//
//   analyseLastFewRounds(gamestate){
//     let length = gamestate.rounds.length
//
//     this.repeating = false;
//     this.repeatedMove = '';
//
//     for (let i=3; i>0; i--){
//       this.lastRounds.push(gamestate.rounds[length-i])
//     }
//
//     let unique = this.lastRounds.filter( function (value, index, self) {
//       return self.indexOf(value) === index;
//     } );
//
//     console.log(unique.length)
//
//     if (unique.length === 1){
//       this.repeating = true;
//       this.repeatedMove = unique[0];
//     }
//
//   }
//
//   randomMoveSelect(){
//       let rand = Math.random();
//       let move = '';
//
//
//       if (rand <= 0.3){
//         move = "R"
//       } else if (rand > 0.3 && rand <= 0.6){
//         move = "P"
//       } else if (rand > 0.6 && rand <= 1){
//         move = "S"
//       }
//
//       return move
//   }
//
//   responseMove(){
//     switch(this.repeatMove){
//       case 'R':
//         this.responseMove = 'P'
//         break
//
//       case 'P':
//         this.responseMove = 'S';
//         break;
//
//       case 'S':
//         this.responseMove = 'R';
//         break;
//
//       case 'D':
//         this.responseMove = 'W';
//         break;
//
//       case 'W':
//         this.responseMove = randomMoveSelect();
//         break;
//
//       default:
//         this.responseMove = randomMoveSelect();
//         break;
//     }
//   }
//
// }
//
// // repeaterDetector = new RepeaterDetector();
// //
// // repeaterDetector.analyseLastFewRounds(gamestate);
//
// let repeating = false,
//     repeatMove = '',
//     responseMove = '';
//
// function analyseLastFewRounds(gamestate){
//   let length = gamestate.rounds.length
//   lastRounds = [];
//
//   for (let i=3; i>0; i--){
//     lastRounds.push(gamestate.rounds[length-i].p2)
//     console.log(gamestate.rounds[length-i].p2)
//   }
//
//   let unique = lastRounds.filter( function (value, index, self) {
//     return self.indexOf(value) === index;
//   } );
//
//   console.log(unique.length)
//
//   if (unique.length === 1){
//     repeating = true;
//     repeatedMove = unique[0];
//   }
//
// }
//
// function responseMoveDecider(){
//   switch(repeatMove){
//     case 'R':
//       responseMove = 'P'
//       break
//
//     case 'P':
//       responseMove = 'S';
//       break;
//
//     case 'S':
//       responseMove = 'R';
//       break;
//
//     case 'D':
//       responseMove = 'W';
//       break;
//
//     case 'W':
//       responseMove = randomMoveSelect();
//       break;
//
//     default:
//       responseMove = randomMoveSelect();
//       break;
//   }
// }
//
// function randomMoveSelect(){
//     let rand = Math.random();
//     let move = '';
//
//
//     if (rand <= 0.3){
//       move = "R"
//     } else if (rand > 0.3 && rand <= 0.6){
//       move = "P"
//     } else if (rand > 0.6 && rand <= 1){
//       move = "S"
//     }
//
//     return move
// }
//
// analyseLastFewRounds(gamestate)
// responseMoveDecider()
//
// console.log(responseMove)
//
//
// // function randomMoveSelect(){
// //     let rand = Math.random();
// //     let move = '';
// //
// //
// //     if (rand <= 0.3){
// //       move = "R"
// //     } else if (rand > 0.3 && rand <= 0.6){
// //       move = "P"
// //     } else if (rand > 0.6 && rand <= 1){
// //       move = "S"
// //     }
// // }
// //
// //
// // let firstRound = gamestate.rounds[0]
// // let lastRound = gamestate.rounds[gamestate.rounds.length-1]
// //
// // class MyCounter {
// //     constructor(){
// //     this.d = 0;
// //     this.w = 0;
// //     this.r = 0;
// //     this.p = 0;
// //     this.s = 0;
// //     }
// //
// //     countMoves(gamestate){
// //         gamestate.rounds.forEach( round => { //Count own use of D - self is P1
// //           if(round.p1 === 'D'){
// //               this.d +=1;
// //           } else if(round.p1 === 'W'){
// //               this.w +=1;
// //           } else if(round.p1 === 'R'){
// //               this.r +=1;
// //           } else if(round.p1 === 'P'){
// //               this.p +=1;
// //           }  else if(round.p1 === 'S'){
// //               this.s +=1;
// //           }
// //
// //         })
// //       }
// // }
// // class TheirCounter {
// //     constructor(){
// //     this.d = 0;
// //     this.w = 0;
// //     this.r = 0;
// //     this.p = 0;
// //     this.s = 0;
// //     }
// //
// //     countMoves(gamestate){
// //         gamestate.rounds.forEach( round => { //Count own use of D - self is P1
// //           if(round.p2 === 'D'){
// //               this.d +=1;
// //           } else if(round.p2 === 'W'){
// //               this.w +=1;
// //           } else if(round.p2 === 'R'){
// //               this.r +=1;
// //           } else if(round.p2 === 'P'){
// //               this.p +=1;
// //           }  else if(round.p2 === 'S'){
// //               this.s +=1;
// //           }
// //
// //         })
// //       }
// // }
// // class PointsCounter {
// //     constructor(){
// //       this.p1Points = 0;
// //       this.p2Points = 0;
// //     }
// //
// //     countPoints(gamestate){
// //       // console.log('calculating points');
// //       const reRPS = /R|P|S/;
// //       let roundPoints = 1;
// //
// //       gamestate.rounds.forEach( round => {
// //         // console.log('P1:' + round.p1 + '  P2:' + round.p2);
// //
// //         if (round.p1 === round.p2){
// //           //no points
// //           // console.log('Draw')
// //           roundPoints += 1
// //           return
// //         }
// //
// //         if (round.p1 === 'D' && round.p2 !== 'W'){
// //           // console.log('P1 wins')
// //           this.p1Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         } else if (round.p2 === 'D' && round.p1 !== 'W'){
// //             // console.log('P2 wins')
// //             this.p2Points += roundPoints;
// //             roundPoints = 1;
// //             return
// //           }
// //
// //           if (round.p1 === 'W' && round.p2 === 'D'){
// //             // console.log('P1 wins')
// //             this.p1Points += roundPoints;
// //             roundPoints = 1;
// //             return
// //           } else if (round.p2 === 'W' && round.p1 === 'D'){
// //             // console.log('P2 wins')
// //             this.p2Points += roundPoints;
// //             roundPoints = 1;
// //             return
// //           }
// //
// //         if (round.p1 === 'W' && reRPS.exec(round.p2)){
// //           // console.log('P2 wins')
// //           this.p2Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         } else if (round.p2 === 'W' && reRPS.exec(round.p1)){
// //           // console.log('P1 wins')
// //           this.p1Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         }
// //
// //         if (round.p1 === 'R' && round.p2 === 'S'){
// //           // console.log('P1 wins')
// //           this.p1Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         } else if (round.p1 === 'R' && round.p2 === 'P'){
// //           // console.log('P2 wins')
// //           this.p2Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         }
// //
// //         if (round.p1 === 'P' && round.p2 === 'R'){
// //           // console.log('P1 wins')
// //           this.p1Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         } else if (round.p1 === 'P' && round.p2 === 'S'){
// //           // console.log('P2 wins')
// //           this.p2Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         }
// //
// //         if (round.p1 === 'S' && round.p2 === 'P'){
// //           // console.log('P1 wins')
// //           this.p1Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         } else if (round.p1 === 'S' && round.p2 === 'R'){
// //           // console.log('P2 wins')
// //           this.p2Points += roundPoints;
// //           roundPoints = 1;
// //           return
// //         }
// //       })
// //     }
// // }
// //
// // console.log(gamestate.rounds.length)
//
// //
// // myCounter = new MyCounter;
// // myCounter.countMoves(gamestate);
// //
// // theirCounter = new TheirCounter;
// // theirCounter.countMoves(gamestate);
// //
// //
// // let points = new PointsCounter;
// // points.countPoints(gamestate)
// //
// //
// // console.log(myCounter);
// // console.log(theirCounter);
// // console.log(points);
let tieRoundsIndices =[],
itsEmily = false;

function findTieRounds(gamestate){
    let i=0;
    gamestate.rounds.forEach(round => {
      if (round.p1 === round.p2){
        tieRoundsIndices.push(i);
      }
      i += 1;
  })
}

function last3ResponsesToTies(){
      let length = tieRoundsIndices.length;
      if (length < 5 ){
        return
      } else {
          firstTieResponse = gamestate.rounds[(tieRoundsIndices[0])+1].p2;
          secondTieResponse = gamestate.rounds[(tieRoundsIndices[1])+1].p2;
          thirdTieResponse = gamestate.rounds[(tieRoundsIndices[2])+1].p2;
          if (firstTieResponse === 'W' && secondTieResponse === 'W' && thirdTieResponse === 'W'){
            itsEmily = true;
          }
    }
}

findTieRounds(gamestate)
last3ResponsesToTies()
console.log(itsEmily)

console.log(gamestate.rounds[(tieRoundsIndices[0])+1].p2)
console.log(gamestate.rounds.length)
