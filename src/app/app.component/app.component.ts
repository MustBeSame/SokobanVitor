import { Component, APP_INITIALIZER } from '@angular/core';
import { MapTerrain } from '../map-terrain'
import { Coords } from '../coords'
import { Level } from '../level'
import { DisplayHelper } from '../display-helper'
import { InputHelper } from '../input-helper'
import { Map } from '../map'



@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'],
 })
export class AppComponent {
  title = 'Sokoban';
  
  mapao = this.startGame();

  public startGame() {
    var mapTerrains =
      [
        // name, symbol, color, canPass, canMove
        new MapTerrain("Goal", "+", "LightGreen", true, false),
        new MapTerrain("Floor", ".", "Black", true, false),
        new MapTerrain("Player", "p", "Cyan", false, true),
        new MapTerrain("Slider", "o", "Brown", false, true),
        new MapTerrain("Wall", "x", "LightGray", false, false),
      ];

    var level = this.loadMap(mapTerrains);

    let display = new DisplayHelper();

    display.initialize(new Coords(120,120), level);

    var input = new InputHelper();

    input.initialize(level);

    //level.map.player
    
    return level.map;
  }

  loadMap(mapTerrains: MapTerrain[]) {
    var map = new Map(mapTerrains, [
      "xxxxxxxxxxxx",
      "x..........x",
      "x.p........x",
      "x.....x....x",
      "x.....x..+.x",
      "x.....x....x",
      "x..o..x..+.x",
      "x.....x....x",
      "x..o..x....x",
      "x..........x",
      "x..........x",
      "xxxxxxxxxxxx"]);

    var level0 = new Level("Level 0", map);
    return level0;
  }
}


