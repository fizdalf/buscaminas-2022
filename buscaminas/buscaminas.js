import {Tile, tileStates} from "./tile.js";

export const gameStates = {
    PLAYING: 0,
    WON: 1,
    LOST: 2
}

export class Buscaminas {
    _gameState = gameStates.PLAYING;
    _tile;
    _secondTile;
    constructor(hasMine = [false, false]) {
        this._tile = new Tile(hasMine[0]);
        this._secondTile = new Tile(hasMine[1]);
    }



    openTile() {
        const wasMine = this._tile.openTile();
        if (wasMine) {
            this._gameState = gameStates.LOST;
        } else {
            if(!this._secondTile.stateOfOnlyTile()){
                this._secondTile.openTile();
            }
            else{}
            this._gameState = gameStates.WON;
        }
    }

    markTile() {
        const wasMine = this.setMarked();
        if (this._gameState === gameStates.LOST){
            this._gameState = gameStates.LOST;
            return;
        }
        if (wasMine) {
            this._gameState = gameStates.WON;
        }
    }

    tileState() {
        console.log([this._tile.state(), this._secondTile.state()])
        return [this._tile.state(), this._secondTile.state()];
    }

    gameState() {
        return this._gameState;
    }

    setMarked() {
        return this._tile.setMarked();
    }
}