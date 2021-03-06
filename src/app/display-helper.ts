import { Level } from './level'
import { Coords } from './coords'
import { Map } from './map'

export class DisplayHelper {
	graphics: any;
	viewSizeInPixels: Coords;


	drawLevel = function (level: Level) {
		//this.clear();
		this.drawMap(level.map);
	}

	drawMap = function (map: Map) {

		var mapSizeInCells: Coords = new Coords(map.sizeInCells.x, map.sizeInCells.y);

		var mapCellSizeInPixels = this.viewSizeInPixels.clone().divide(mapSizeInCells);
		var cellPos = new Coords(0, 0);
		var drawPos = new Coords(0, 0);

		if (map.player == null) {
			for (var y = 0; y < mapSizeInCells.y; y++) {
				cellPos.y = y;

				for (var x = 0; x < mapSizeInCells.x; x++) {
					cellPos.x = x;
					var cellToDraw = map.cellAtPos(cellPos);

					if (cellToDraw.color != null) {
						drawPos.overwriteWith(cellPos).multiply(mapCellSizeInPixels);

						this.graphics.fillStyle = cellToDraw.color;

						this.graphics.fillRect(drawPos.x, drawPos.y, mapCellSizeInPixels.x, mapCellSizeInPixels.y);
					}
				}
			}
		} else {
			debugger;
			//Moving Slider

			var colorSlider = map.terrains[3].color;
			for (var i = 0; i < map.sliders.length; i++) {
				let slider = map.sliders[i];

				drawPos.overwriteWith(slider.position).multiply(mapCellSizeInPixels);

				this.graphics.fillStyle = colorSlider;

				this.graphics.fillRect(drawPos.x, drawPos.y, mapCellSizeInPixels.x, mapCellSizeInPixels.y);
				//Cleaning Map
				if (slider.positionPast != null){
					drawPos.overwriteWith(slider.positionPast).multiply(mapCellSizeInPixels);
					this.graphics.fillStyle = "Black";
					this.graphics.fillRect(drawPos.x, drawPos.y, mapCellSizeInPixels.x, mapCellSizeInPixels.y);
					break;
				}
			}
			//Moving Player
			var colorPlayer = map.terrains[2].color;
			drawPos.overwriteWith(map.player.position).multiply(mapCellSizeInPixels);

			this.graphics.fillStyle = colorPlayer;

			this.graphics.fillRect(drawPos.x, drawPos.y, mapCellSizeInPixels.x, mapCellSizeInPixels.y);

			//Cleaning map
			drawPos.overwriteWith(map.player.positionPast).multiply(mapCellSizeInPixels);
			this.graphics.fillStyle = "Black";
			this.graphics.fillRect(drawPos.x, drawPos.y, mapCellSizeInPixels.x, mapCellSizeInPixels.y);
		}
	}	

	initialize = function (viewSizeInPixels: Coords, level: Level) {
		this.viewSizeInPixels = viewSizeInPixels;
		level.displayHelper = this;
		let canvas = document.createElement("canvas");
		canvas.width = viewSizeInPixels.x;
		canvas.height = viewSizeInPixels.y;

		this.graphics = canvas.getContext("2d");

		let divMain = document.getElementById("divMain");
		divMain.appendChild(canvas);

		this.drawLevel(level);
	}
}