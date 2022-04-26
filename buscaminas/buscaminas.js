import {Tile} from "./tile.js";

export const gameStates = {
    PLAYING: 0,
    WON: 1,
    LOST: 2
}

export class Buscaminas {
    _gameState = gameStates.PLAYING;
    _tiles;

    constructor(mines) {
        if (!this.checkValidMines(mines)) {
            throw new Error("The board has to have at least one mine, and at least one empty tile");
        }
        this.generateTiles(mines);
    }

    checkValidMines(mines) {
        let beforeMine = undefined;
        for (const mine of mines) {
            if (beforeMine !== undefined && mine !== beforeMine) {
                return true;
            }
            beforeMine = mine;
        }
        return false;
    }

    whatTile(numberTile) {
        if (this._tiles.length - 1 < numberTile + 1) {
            return numberTile -1;
        } else {
            return numberTile +1;
        }
    }
    hasMine(tile){
        return !this._tiles[this.whatTile(tile)].hasMine()
    }
    openTile(tile) {
        const wasMine = this._tiles[tile].openTile();
        const whatTile = this.whatTile(tile)
        if (wasMine) {
            this._gameState = gameStates.LOST;
            return;
        }if (this.hasMine(tile)) {
            this._tiles[whatTile].openTile();
            this._gameState = gameStates.WON;
        }
    }

    markTile(tile) {
        const wasMine = this.setMarked(tile);
        if (this._gameState === gameStates.LOST) {
            return;
        }
        if (wasMine) {
            this._gameState = gameStates.WON;
        }
    }

    tileState() {
        let result;
        result = this._tiles.map((tile) => {
            return tile.state()
        });
        return result;
    }

    gameState() {
        return this._gameState;
    }

    setMarked(tile) {
        return this._tiles[tile - 1].setMarked();
    }

    generateTiles(mines) {
        this._tiles = mines.map((mine)=> {
            return new Tile(mine)
        });
    }
}