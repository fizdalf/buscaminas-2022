
export const tileStates = {
    CLOSED: 0,
    OPENED: 1,
    ONE: 2,
    TWO: 3,
    THREE: 4,
    MINE: 5,
    MARKED: 6
};


export class Tile {
    _tileState = tileStates.CLOSED;
    _hasMine;
    constructor(hasMine = false) {
        this._hasMine = hasMine;
    }

    hasMine(){
        return this._hasMine;
    }

    toggleMarked() {
        if(this._tileState === tileStates.MARKED){
            this._tileState = tileStates.CLOSED;
            return;
        }
        this._tileState = tileStates.MARKED;
        return this._hasMine;
    }
    numberOfMine(numberMine){
        if(numberMine === 0){
            this._tileState = tileStates.OPENED;
        }
        else if(numberMine === 1){
            this._tileState = tileStates.ONE;
        }
        else if(numberMine === 2){
            this._tileState = tileStates.TWO;
        }
        else if(numberMine === 3){
            this._tileState = tileStates.THREE;
        }
    }

    openTile() {
        if (this._tileState === tileStates.MARKED){
            return;
        }
        if(this._tileState === tileStates.ONE || this._tileState === tileStates.TWO || this._tileState === tileStates.THREE){
            return;
        }
        if (this._hasMine) {
            this._tileState = tileStates.MINE;
        } else {
            this._tileState = tileStates.OPENED;
        }
        return this._hasMine;
    }

    state() {
        return this._tileState;
    }
}