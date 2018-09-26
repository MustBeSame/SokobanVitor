import { HostListener } from '@angular/core';
import { Level } from './level'
import { debug } from 'util';

export class InputHelper {
    keyCodePressed: number;
    level: Level;

    initialize(level:Level){
        document.body.onkeydown = this.handleEventKeyDown.bind(this);
        document.body.onkeyup = this.handleEventKeyUp.bind(this);
        this.level = level;
    }
    @HostListener('document:keypress', ['$event'])
    handleEventKeyDown(event: KeyboardEvent){
        this.keyCodePressed = event.keyCode;
        this.level.updateForTimerTick(this);
    }
    handleEventKeyUp()
	{
		this.keyCodePressed = null;
	}
}
