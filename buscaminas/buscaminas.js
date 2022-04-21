import {Tile} from "./tile.js";

export const gameStates = {
    PLAYING: 0,
    WON: 1,
    LOST: 2
}

export class Buscaminas {
    _gameState = gameStates.PLAYING;
    _tile;

    constructor(hasMine = false) {
        this._tile = new Tile(hasMine);
    }

    openTile() {
        const wasMine = this._tile.openTile();
        if (wasMine) {
            this._gameState = gameStates.LOST;
        } else {
            this._gameState = gameStates.WON;
        }
    }

    markTile() {
        const wasMine = this.setMarked();
        if (wasMine) {
            this._gameState = gameStates.WON;
        }
    }

    tileState() {
        return this._tile.state();
    }

    gameState() {
        return this._gameState;
    }
    setMarked() {
        return this._tile.setMarked();
    }
}