import {Buscaminas, gameStates} from "./buscaminas";
import {tileStates} from "./tile.js";

describe('Buscaminas', () => {
    it('should consider the game is won when there is no tiles left to open', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        const expected = gameStates.WON;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should consider that the game is lost when a mine is found', () => {
        const buscaminas = new Buscaminas(true);
        buscaminas.openTile();
        const expected = gameStates.LOST;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should consider the game is playing when is just started', () => {
        const buscaminas = new Buscaminas();
        const expected = gameStates.PLAYING;
        expect(buscaminas.gameState()).toBe(expected);
    });
    it('should consider that the game is won when tiles with mine are marked', () => {
        const buscaminas = new Buscaminas(true);
        buscaminas.markTile();
        const expected = gameStates.WON;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });
    it('should consider that the game is not won when tiles empty are marked', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile();
        const expected = gameStates.PLAYING;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should start the game with a closed tile', () => {
        const buscaminas = new Buscaminas();
        expect(buscaminas.tileState()).toBe(tileStates.CLOSED);
    });

    it('should show an opened tile after opening an empty tile', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        expect(buscaminas.tileState()).toBe(tileStates.OPENED);
    });

    it('should show a marked tile after marking a tile', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile();
        expect(buscaminas.tileState()).toBe(tileStates.MARKED);
    });

    it('should show a mine in the tile after opening a tile with a mine', () => {
        const buscaminas = new Buscaminas(true);
        buscaminas.openTile();
        expect(buscaminas.tileState()).toBe(tileStates.MINE);
    });

    it('should throw an error', () => {
        const throws = () =>  {
            throw new Error("test error");
        }
        expect(throws).toThrowError("test error");
    });
});



