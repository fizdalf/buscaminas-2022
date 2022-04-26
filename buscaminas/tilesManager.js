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
}

export class TilesManager {
    #tiles
    #minesChecker = new MinesChecker();
    constructor(mines) {
        this.#generateTiles(mines);
    }
    areThereClosedTilesWithoutMines() {
        for (const tile of this.#tiles) {
            if (tile.state() === tileStates.CLOSED && !tile.hasMine()) {
                return true;
            }
        }
        return false;
    }

    #sideTile(numberTile) {
        if (this.#tiles.length - 1 < numberTile + 1) {
            return numberTile - 1;
        } else {
            return numberTile + 1;
        }
    }

    tileState() {
        let result;
        result = this.#tiles.map((tile) => {
            return tile.state()
        });
        return result;
    }

    toggleMarked(tile) {
        return this.#tiles[tile].toggleMarked();
    }


    #generateTiles(mines) {
        let boolean = this.#minesChecker.checkMines(mines);
        if (!boolean) {
            throw new Error("The board has to have at least one mine, and at least one empty tile");
        }
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
        if (!this.#hasMine(this.#sideTile(tile))) {
            this.#tiles[this.#sideTile(tile)].openTile();
        }
    }
}