
export const tileStates = {
    CLOSED: 0,
    EMPTY: 1,
    ONE: 2,
    TWO: 3,
    THREE: 4,
    MINE: 5,
    MARKED: 6
};


export class Tile {
    _tileState = tileStates.CLOSED;
    _hasMine;
    numberMines;
    constructor(hasMine = false, numberMines) {
        this._hasMine = hasMine;
        this.numberMines = numberMines;
    }

    hasMine(){
        return this._hasMine;
    }

    toggleMarked() {
        if(this._tileState === tileStates.MARKED){
            this._tileState = tileStates.CLOSED;
            return this._hasMine;
        }
        this._tileState = tileStates.MARKED;
        return this._hasMine;
    }
    openTile() {
        if(this._tileState !== tileStates.CLOSED){
            return;
        }
        if (this._hasMine) {
            this._tileState = tileStates.MINE;
        } else {
            this._tileState = this.numberMines + 1
        }
        return this._hasMine;
    }

    state() {
        return this._tileState;
    }
}