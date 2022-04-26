import {Tile, tileStates} from "./tile.js";

export const gameStates = {
    PLAYING: 0,
    WON: 1,
    LOST: 2
}

export class Buscaminas {
    _gameState = gameStates.PLAYING;
    _tiles;

    constructor(mines) {
        this._generateTiles(mines);
    }

    _checkValidMines(mines) {
        let beforeMine = undefined;
        for (const mine of mines) {
            if (beforeMine !== undefined && mine !== beforeMine) {
                return true;
            }
            beforeMine = mine;
        }
        return false;
    }

    updateGameStatus(wasMine) {
        if (wasMine) {
            this._gameState = gameStates.LOST;
            return;
        }
        if(this._areThereClosedTilesWithoutMines()){
            return;
        }
        this._gameState = gameStates.WON;
    }

    openTile(tile) {
        const wasMine = this._openTile(tile);
        this.updateGameStatus(wasMine);
    }

    markAndUnmarkTile(tile) {
        if (this._gameState === gameStates.LOST) {
            return;
        }
        this._toggleMarked(tile);
    }

    gameState() {
        return this._gameState;
    }

    tileState() {
        return this._tileState();
    }

    _areThereClosedTilesWithoutMines(){
        for (const tile of this._tiles){
            if (tile.state() === tileStates.CLOSED && !tile.hasMine()) {
                return true;
            }
        }
        return false;
    }

    _sideTile(numberTile) {
        if (this._tiles.length - 1 < numberTile + 1) {
            return numberTile - 1;
        } else {
            return numberTile + 1;
        }
    }

    _tileState(){
        let result;
        result = this._tiles.map((tile) => {
            return tile.state()
        });
        return result;
    }

    _toggleMarked(tile) {
        return this._tiles[tile].toggleMarked();
    }

    _generateTiles(mines) {
        if (!this._checkValidMines(mines)) {
            throw new Error("The board has to have at least one mine, and at least one empty tile");
        }
        this._tiles = mines.map((mine) => {
            return new Tile(mine)
        });
    }

    _openTile(tile) {
        const wasMine = this._tiles[tile].openTile();
        if (wasMine) {
            return true;
        }
        this._openNeighborTiles(tile);
        return false;
    }

    _hasMine(tile) {
        return this._tiles[tile].hasMine()
    }

    _openNeighborTiles(tile) {
        if (!this._hasMine(this._sideTile(tile))) {
            this._tiles[this._sideTile(tile)].openTile();
        }
    }
}