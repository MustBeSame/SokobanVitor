export class InputHelper {
    keyCodePressed: number;

    initialize(){
        document.body.onkeydown = this.handleEventKeyDown.bind(this);
	    document.body.onkeyup = this.handleEventKeyUp.bind(this);
    }
    handleEventKeyDown(event){
        this.keyCodePressed = event.keyCode;
    }
    handleEventKeyUp()
	{
		this.keyCodePressed = null;
	}
}
