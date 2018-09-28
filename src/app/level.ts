import { Coords } from './coords'
import { InputHelper } from './input-helper'
import { DisplayHelper } from './display-helper'
import { Map } from './map'

export class Level {
    name: string;
    map: Map;
    displayHelper: DisplayHelper;
    constructor(name: string, map:Map) {
        this.name = name;
        this.map = map;
    }

    updateForTimerTick(inputHelper:InputHelper) {
        
        if (inputHelper.keyCodePressed == 65) // a
        {
            this.updateForTimerTick_PlayerMove
                (
                new Coords(-1, 0)
                );
        }
        else if (inputHelper.keyCodePressed == 68) // d
        {
            this.updateForTimerTick_PlayerMove
                (
                new Coords(1, 0)
                );
        }
        else if (inputHelper.keyCodePressed == 83) // s
        {
            this.updateForTimerTick_PlayerMove
                (
                new Coords(0, 1)
                );
        }
        else if (inputHelper.keyCodePressed == 87) // w
        {
            this.updateForTimerTick_PlayerMove
                (
                new Coords(0, -1)
                );
        }
    }
    updateForTimerTick_PlayerMove(directionToMove: Coords) {

        //this.map.player.position = directionToMove;
        debugger;
        let playerPosNext:Coords = new Coords(this.map.player.position.x + directionToMove.x, this.map.player.position.y + directionToMove.y);
        
        var cellAtPlayerPosNext = this.map.cellAtPos(playerPosNext[0]);

        if (cellAtPlayerPosNext.canPass == true) {
            var sliderAtPlayerPosNext = this.map.sliderAtPos(playerPosNext);

            if (sliderAtPlayerPosNext == null) {
                this.map.player.position = playerPosNext;
                debugger;
                this.displayHelper.drawLevel(this);
            }
            else {
                var canSliderSlide = true;

                var sliderPosNext:Coords[];
                sliderPosNext.push(directionToMove);

                var cellAtSliderPosNext = this.map.cellAtPos(sliderPosNext);
                if (cellAtSliderPosNext.canPass == false) {
                    canSliderSlide = false;
                }
                else {
                    var sliderOtherAtSliderPosNext = this.map.sliderAtPos
                        (
                        sliderPosNext
                        );
                    if (sliderOtherAtSliderPosNext != null) {
                        canSliderSlide = false;
                    }
                }

                if (canSliderSlide == true) {
                    this.map.player.position.add(directionToMove);
                    sliderAtPlayerPosNext.position.add(directionToMove);

                    if (cellAtSliderPosNext.name == "Goal") {
                        console.log("VOCÊ GANHOU");
                    }
                }
            }
        }
    }
}



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