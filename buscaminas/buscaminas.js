import {Tile, tileStates} from "./tile.js";

export const gameStates = {
    PLAYING: 0,
    WON: 1,
    LOST: 2
}

export class Buscaminas {
    _gameState = gameStates.PLAYING;
    _tiles = [];
    constructor(hasMine = [true, false]) {
        this._tiles = [new Tile(hasMine[0]), new Tile(hasMine[1])]
    }

    isThatTile(numberTile){
        if (this._tiles.length -1 < numberTile +1){
            return numberTile -1;
        }else{
            return numberTile +1;
        }
    }

    openTile(tile) {
        const wasMine = this._tiles[tile].openTile();
        if (wasMine) {
            this._gameState = gameStates.LOST;
        } else {
            if (!this._tiles[this.isThatTile(tile)].hasMine()) {
                this._tiles[this.isThatTile(tile)].openTile();
                this._gameState = gameStates.WON;
            }
        }
    }
    markTile(tile) {
        const wasMine = this.setMarked(tile);
        if (this._gameState === gameStates.LOST){
            return;
        }
        if (wasMine) {
            this._gameState = gameStates.WON;
        }
    }

    tileState() {
        return [this._tiles[0].state(), this._tiles[1].state()];
    }

    gameState() {
        return this._gameState;
    }

    setMarked(tile) {
        if(tile === 1){
            return this._tiles[0].setMarked();
        }
        else if (tile === 2){
            return this._tiles[1].setMarked();
        }
    }
}