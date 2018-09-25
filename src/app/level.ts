import { Coords } from './coords'
import { DisplayHelper } from './display-helper'

export class Level {
    name: string;
    map: string;

    constructor(name:string, map) {
        this.name = name;
        this.map = map;
    }
}


// Level.prototype.updateForTimerTick_PlayerMove = function (directionToMove) {
//     var playerToMove = this.map.player;
//     var playerPosNext = playerToMove.pos.clone().add
//         (
//         directionToMove
//         );
//     var map = this.map;
//     var cellAtPlayerPosNext = map.cellAtPos(playerPosNext);

//     if (cellAtPlayerPosNext.isPassable == true) {
//         var sliderAtPlayerPosNext = map.sliderAtPos(playerPosNext);

//         if (sliderAtPlayerPosNext == null) {
//             playerToMove.pos.add(directionToMove);
//         }
//         else {
//             var canSliderSlide = true;

//             var sliderPosNext = playerPosNext.clone().add
//                 (
//                 directionToMove
//                 );
//             var cellAtSliderPosNext = map.cellAtPos(sliderPosNext);
//             if (cellAtSliderPosNext.isPassable == false) {
//                 canSliderSlide = false;
//             }
//             else {
//                 var sliderOtherAtSliderPosNext = this.map.sliderAtPos
//                     (
//                     sliderPosNext
//                     );
//                 if (sliderOtherAtSliderPosNext != null) {
//                     canSliderSlide = false;
//                 }
//             }

//             if (canSliderSlide == true) {
//                 playerToMove.pos.add(directionToMove);
//                 sliderAtPlayerPosNext.pos.add(directionToMove);

//                 if (cellAtSliderPosNext.name == "Goal") {
//                     this.victoryCheck();
//                 }
//             }
//         }
//     }
// }

// Level.prototype.victoryCheck = function () {
//     var areAllGoalCellsOccupiedBySliders = true;

//     var map = this.map;
//     var terrainGoal = map.terrains["Goal"];
//     var cellPos = new Coords(0, 0);

//     for (var y = 0; y < map.sizeInCells.y; y++) {
//         cellPos.y = y;

//         for (var x = 0; x < map.sizeInCells.x; x++) {
//             cellPos.x = x;

//             var terrainAtPos = map.cellAtPos(cellPos);
//             if (terrainAtPos == terrainGoal) {
//                 var sliderAtPos = map.sliderAtPos(cellPos);
//                 if (sliderAtPos == null) {
//                     areAllGoalCellsOccupiedBySliders = false;
//                     y = map.sizeInCells.y;
//                     break;
//                 }
//             }
//         }
//     }

//     if (areAllGoalCellsOccupiedBySliders == true) {
//         Globals.Instance.inputHelper.finalize();
//         Globals.Instance.displayHelper.drawLevel(this);

//         var divWinMessage = document.createElement("div");
//         divWinMessage.innerHTML = "You win!";
//         document.body.appendChild(divWinMessage);
//     }
// }
// }