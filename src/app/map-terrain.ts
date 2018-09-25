export class MapTerrain {

    name: string;
    symbol: string;
    color: string;
    canPass: boolean;
    canMove: boolean;

    constructor(name, symbol, color, canPass, canMove) {
        this.name = name;
        this.symbol = symbol;
        this.color = color;
        this.canPass = canPass;
        this.canMove = canMove;
    }
}

