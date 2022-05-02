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
    constructor(mines) {
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
    numberOfMine(numberMines, positionLine, positionTile){
        let numberMine = 0;
    numberMines.map((line, indexLine) => {
            if(positionLine === 0){
                numberMine = numberMine + line.filter((tile, index) => tile && positionLine +2 !== indexLine && positionTile +2 !== index).length
            }
            if(positionLine === 1){
                numberMine = numberMine + line.filter((tile, index) => tile && positionTile -2 !== index).length
            }
            if(positionLine === 2){
                numberMine = numberMine + line.filter((tile, index) => tile && positionLine -2 !== indexLine && positionTile -2 !== index).length
            }
        });
        return numberMine;
    }
    toggleMarked(line, tile) {
        return this.#tiles[line][tile].toggleMarked();
    }

    #generateTiles(mines) {
        this.#minesChecker.validMines(mines)
        this.#tiles = mines.map((line, indexLine) => {
            return line.map((tile, indexTile) => {
                return new Tile(tile, this.numberOfMine(mines, indexLine, indexTile));
            });
        });
    }

    openTile(line, tile) {
        const wasMine = this.#tiles[line][tile].openTile();
        if (wasMine) {
            return true;
        }
        if(this.#tiles[line][tile].state() === tileStates.EMPTY){
            this.#openNeighborTiles(line, tile);
        }
        return false;
    }

    #openNeighborTiles(lines, tiles) {
        for(const line of this.#tiles){
            for(const tile of line){
                if(!tile.hasMine() && lines -2 !== this.#tiles.indexOf(line) && tiles -2 !== this.#tiles.indexOf(tile)){
                    tile.openTile()
                }
            }
        }
    }
}
