
export const tileStates = {
    CLOSED: 0,
    OPENED: 1,
    MINE: 2,
    MARKED: 3
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

    openTile() {
        if (this._tileState === tileStates.MARKED){
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