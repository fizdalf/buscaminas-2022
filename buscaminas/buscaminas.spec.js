import {Buscaminas, gameStates} from "./buscaminas";
import {tileStates} from "./tile.js";
describe('Buscaminas', () => {
    it('should consider that the game is lost when a mine is found', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile(1);
        expect(buscaminas.gameState()).toBe(gameStates.WON);
    });
    it('should consider that the game is lost when a mine is found', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile(0);
        const expected = gameStates.LOST;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should consider the game is playing when is just started', () => {
        const buscaminas = new Buscaminas([true, false]);
        const expected = gameStates.PLAYING;
        expect(buscaminas.gameState()).toBe(expected);
    });
    it('should consider that the game is not won when tiles empty are marked', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.markAndUnmarkTile(1);
        const expected = gameStates.PLAYING;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should not allow mark a tile when you lost',  () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile(0);
        buscaminas.markAndUnmarkTile(0);
        expect(buscaminas.gameState()).toBe(gameStates.LOST);
    });
    it('should show the first tile closed and the second open', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile(1);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED]);
    });

    it('should consider that the game is lost when a mine is found', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile(1);
        const expected = gameStates.LOST;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should lost when one tile is open and one tile with mine is open too', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile(0);
        buscaminas.openTile(1);
        expect(buscaminas.gameState()).toBe(gameStates.LOST)
    });
    it('should throw an error when all tiles are empty', () => {
        expect(() => { new Buscaminas([false, false]);}).toThrowError("The board has to have at least one mine, and at least one empty tile");
    });
});
