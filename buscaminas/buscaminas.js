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
    constructor(hasMine){
        this._tile = new Tile(hasMine);
    }
    openTile(number) {
        const wasMine = this._tile.openTile(number);
        this._secondTile = new Tile(this._tile.aroundMine(number))
        if (wasMine) {
            this._gameState = gameStates.LOST;
        } else {
            if (this._tile.state() === tileStates.MARKED){}
            else if(this._tile.state() === tileStates.ONE){}
            else{
                this._secondTile.openTile();
                this._gameState = gameStates.WON;
            }
        }
    }

    markTile() {
        const wasMine = this.setMarked();
            if (wasMine) {
                this._gameState = gameStates.WON;
            }
        }

    tileState() {
        if(this._secondTile === undefined){
            this._secondTile = new Tile()
        }
        return [this._tile.state(), this._secondTile.state()];
    }

    gameState() {
        return this._gameState;
    }
    setMarked() {
        return this._tile.setMarked()
    }

}