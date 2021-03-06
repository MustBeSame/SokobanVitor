import { MapTerrain } from './map-terrain'
import { Coords } from './coords'

export class Map {
    terrains: MapTerrain[];
    cellAsStrings: string[];
    sizeInCells: Coords;
    sliders: Slider[];
    player: Player;
    indexOf:number = 0;

    constructor(terrains: MapTerrain[], cellAsStrings: string[]){
        this.terrains = terrains;
        this.cellAsStrings = cellAsStrings;
        this.sizeInCells = new Coords(
            this.cellAsStrings[0].length,
            this.cellAsStrings.length
        );
        this.sliders = new Array<Slider>();
    }

    cellAtPos (cellPos){
        var terrainSymbol = this.cellAsStrings[cellPos.y].charAt(cellPos.x);
        var terrain = this.terrains.find(x => x.symbol == terrainSymbol);
        
        if (terrain.name == "Player"){
            this.player = new Player(cellPos.clone());
        }
        if (terrain.name == "Slider"){
            this.sliders.push(new Slider(cellPos.clone(), this.indexOf));
            this.indexOf++;            
        }
		return terrain;
    }
    sliderAtPos(cellPosNext) {
        var returnValue = null;
        
        for (var i = 0; i < this.sliders.length; i++) {
            let slider = this.sliders[i];
            if (slider.position.x == cellPosNext.x && slider.position.y == cellPosNext.y) {
                returnValue = slider;
                return returnValue;
            }
        }
    }
}
class Player {
    positionPast:Coords;
    position: Coords;
    constructor(position:Coords){
        this.position = position;
    }
}
class Slider {
    index: number;
    positionPast:Coords;
    position: Coords;
    constructor(position:Coords, index:number){
        this.position = position;
        this.index = index;
    }
}
// function Maap(terrains, cellsAsStrings) {
//   this.terrains = terrains;
//   this.terrains.addLookups("name");
//   this.terrains.addLookups("symbol");
//   this.cellsAsStrings = cellsAsStrings;

//   this.sizeInCells = new Coords
//     (
//     this.cellsAsStrings[0].length,
//     this.cellsAsStrings.length
//     );

//   this.movablesInitialize();
// }
// {
//   Map.prototype.cellAtPos = function (cellPos) {
//     var terrainSymbol = this.cellsAsStrings[cellPos.y].charAt(cellPos.x);
//     var terrain = this.terrains[terrainSymbol];
//     return terrain;
//   }

//   Map.prototype.movablesInitialize = function () {
//     this.sliders = [];

//     var terrainSymbolForFloor = this.terrains["Floor"].symbol;
//     var cellPos = new Coords(0, 0);

//     for (var y = 0; y < this.sizeInCells.y; y++) {
//       cellPos.y = y;
//       var cellRowAsString = this.cellsAsStrings[y];

//       for (var x = 0; x < this.sizeInCells.x; x++) {
//         cellPos.x = x;
//         var terrainSymbol = cellRowAsString.charAt(x);
//         var terrain = this.terrains[terrainSymbol];
//         if (terrain.isMovable == true) {
//           cellRowAsString =
//             cellRowAsString.substr(0, x)
//             + terrainSymbolForFloor
//             + cellRowAsString.substr(x + 1)
//         }

//         // if (terrain.name == "Player") {
//         //   this.player = new Player(cellPos.clone());
//         // }
//         // else if (terrain.name == "Slider") {
//         //   var slider = new Slider(cellPos.clone());
//         //   this.sliders.push(slider);
//       }
//     }

//     this.cellsAsStrings[y] = cellRowAsString;
//   }
// }

// Map.prototype.sliderAtPos = function (cellPos) {
//   var returnValue = null;

//   for (var i = 0; i < this.sliders.length; i++) {
//     var slider = this.sliders[i];
//     if (slider.pos.equals(cellPos) == true) {
//       returnValue = slider;
//       break;
//     }
//   }

//   return returnValue;
// }