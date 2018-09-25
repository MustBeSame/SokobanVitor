export class Coords {
    x: number;
    y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other: any) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
    clone(other: any) {
        return new Coords(this.x, this.y);
    }
    divide(other: any) {
        this.x /= other.x;
        this.y /= other.y;
        return this;
    }
    equals(other: any) {
        var returnValue =
            (
                this.x == other.x
                && this.y == other.y
            );
        return returnValue;
    }
    multiply(other: any) {
        this.x *= other.x;
        this.y *= other.y;
        return this;
    }
    overwriteWith(other: any) {
        this.x = other.x;
        this.y = other.y;
        return this;
    }
}