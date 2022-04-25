
export const tileStates = {
    CLOSED: 0,
    OPENED: 1,
    ONE: 2,
    MINE: 3,
    MARKED: 4
};


export class Tile {
    _tileState = tileStates.CLOSED;
    _hasMine;
    constructor(hasMine = false) {
        this._hasMine = hasMine;
    }
    aroundMine(numberMine) {
        if (numberMine === 0){
            return false;
        }
        else if (numberMine === 1){
            return true;
        }
    }
    setMarked() {
        this._tileState = tileStates.MARKED;
        return this._hasMine;
    }

    openTile(number = 0) {
        if (this._tileState === tileStates.MARKED){
            this._tileState = tileStates.MARKED;
            return;
        }
        if (this._hasMine) {
            this._tileState = tileStates.MINE;
            return this._hasMine;
        } else if (number === 0){
            this._tileState = tileStates.OPENED;
        }
        else if (number === 1){
            this._tileState = tileStates.ONE;
        }
        return this._hasMine;
    }

    state() {
        return this._tileState;
    }
}