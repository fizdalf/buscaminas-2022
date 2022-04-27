import {Tile, tileStates} from "./tile.js";

export class MinesChecker {
    checkMines(mines){
        let beforeMine = undefined;
        for (const mine of mines) {
            if (beforeMine !== undefined && mine !== beforeMine) {
                return true;
            }
            beforeMine = mine;
        }
        return false;
    }
    validMines(mines){
        if (!this.checkMines(mines)) {
            throw new Error("The board has to have at least one mine, and at least one empty tile");
        }
    }
}

export class TilesManager {
    #tiles
    #minesChecker = new MinesChecker();
    constructor(mines) {
        this.#generateTiles(mines);
    }
    areThereClosedTilesWithoutMines() {
        return this.#tiles.some(tile => tile.state() === tileStates.CLOSED && !tile.hasMine())
    }

    #sideTile(numberTile) {
        let modifier = + 1
        if (this.#tiles.length - 1 < numberTile + 1) {
            modifier = - 1;
        }
        return numberTile + modifier;
    }

    tileState() {
        return this.#tiles.map((tile) => tile.state());
    }

    toggleMarked(tile) {
        return this.#tiles[tile].toggleMarked();
    }

    #generateTiles(mines) {
        this.#minesChecker.validMines(mines)
        this.#tiles = mines.map((mine) => {
            return new Tile(mine)
        });
    }

    openTile(tile) {
        const wasMine = this.#tiles[tile].openTile();
        if (wasMine) {
            return true;
        }
        this.#openNeighborTiles(tile);
        return false;
    }

    #hasMine(tile) {
        return this.#tiles[tile].hasMine()
    }

    #openNeighborTiles(tile) {
        const sideTile = this.#sideTile(tile)
        if (this.#hasMine(sideTile)) {
            return;
        }
        this.#tiles[this.#sideTile(tile)].openTile();
    }
}