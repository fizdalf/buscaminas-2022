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
                this._gameState = gameStates.WON;
            }
            else{}
        }
    }

    openSecondTile() {
        const wasMine = this._secondTile.openTile();
        if (wasMine) {
            this._gameState = gameStates.LOST;
        } else {
            if(!this._tile.stateOfOnlyTile()){
                this._tile.openTile();
                this._gameState = gameStates.WON;
            }
            else{}
        }
    }

    markTile(tile) {
        const wasMine = this.setMarked(tile);
        if (this._gameState === gameStates.LOST){
            this._gameState = gameStates.LOST;
            return;
        }
        if (wasMine) {
            this._gameState = gameStates.WON;
        }
    }

    tileState() {
        return [this._tile.state(), this._secondTile.state()];
    }

    gameState() {
        return this._gameState;
    }

    setMarked(tile) {
        if(tile === 1){
            return this._tile.setMarked();
        }
        else if (tile === 2){
            return this._secondTile.setMarked();
        }
    }
}