import {Tile, tileStates} from "./tile.js";

export class MinesChecker {

    checkMines(mines){
        let beforeMine = undefined;
        for (const line of mines) {
            for(const mine of line){
                if (beforeMine !== undefined && mine !== beforeMine) {
                    return true;
                }
                beforeMine = mine;
            }
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
    Mines;
    constructor(mines) {
        this.Mines = mines
        this.#generateTiles(mines);
    }
    areThereClosedTilesWithoutMines() {
        return this.#tiles.some(line => line.some(tile => tile.state() === tileStates.CLOSED && !tile.hasMine()))
    }
    tileState() {
        return this.#tiles.map((line) => {
            return line.map((tile) => tile.state())
        })
    }
    numberOfMine(numberMines){
        let numberMine = 0;
        numberMines.map((line) => numberMine = numberMine + line.filter(tile => tile === true).length)
        return numberMine;
    }
    toggleMarked(line, tile) {
        return this.#tiles[line][tile].toggleMarked();
    }

    #generateTiles(mines) {
        this.#minesChecker.validMines(mines)
        this.#tiles = mines.map((line) => {
            return line.map((mine) => {
                return new Tile(mine, this.numberOfMine(this.Mines));
            });
        });
    }

    openTile(line, tile) {
        const wasMine = this.#tiles[line][tile].openTile();
        if (wasMine) {
            return true;
        }
        if(this.#tiles[line][tile].state() === tileStates.EMPTY){
            this.#openNeighborTiles();
        }
        return false;
    }

    #openNeighborTiles() {
        for(const line of this.#tiles){
            for(const tile of line){
                if(!tile.hasMine()){
                    tile.openTile()
                }
            }
        }
    }
}
