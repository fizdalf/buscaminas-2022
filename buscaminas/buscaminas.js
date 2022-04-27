import {TilesManager} from "./tilesManager.js";

export const gameStates = {
    PLAYING: 0,
    WON: 1,
    LOST: 2
}

export class Buscaminas {
    #gameState = gameStates.PLAYING;
    /** @member {TilesManager} */
    #tilesManager;

    constructor(mines) {
        this.#tilesManager = new TilesManager(mines);
    }

    updateGameStatus(wasMine) {
        if (wasMine) {
            this.#gameState = gameStates.LOST;
            return;
        }
        if (this.#tilesManager.areThereClosedTilesWithoutMines()) {
            return;
        }
        this.#gameState = gameStates.WON;
    }

    openTile(tile) {
        const wasMine = this.#tilesManager.openTile(tile);
        this.updateGameStatus(wasMine);
    }

    markAndUnmarkTile(tile) {
        if (this.#gameState === gameStates.LOST) {
            return;
        }
        this.#tilesManager.toggleMarked(tile);
    }

    gameState() {
        return this.#gameState;
    }

    tileState() {
        return this.#tilesManager.tileState();
    }
}