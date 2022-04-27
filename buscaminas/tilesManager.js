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
    #tiles;
    #minesChecker = new MinesChecker();
    constructor(mines) {
        this.#generateTiles(mines);
    }
    areThereClosedTilesWithoutMines() {
        return this.#tiles.some(tile => tile.state() === tileStates.CLOSED && !tile.hasMine())
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
        this.#openNeighborTiles();
        return false;
    }

    #hasMine(tile) {
        return this.#tiles[tile].hasMine()
    }

    #openNeighborTiles() {
        for(const tile in this.#tiles){
            if(!this.#hasMine(tile)){
                this.#tiles[tile].openTile()
            }
        }
    }
}