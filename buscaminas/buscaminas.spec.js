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
        const buscaminas = new Buscaminas([true, false]);
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
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.markTile(1);
        const expected = gameStates.WON;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });
    it('should consider that the game is not won when tiles empty are marked', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile(1);
        const expected = gameStates.PLAYING;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should start the game with a closed tiles', () => {
        const buscaminas = new Buscaminas();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED]);
    });


    it('should show a marked tile after marking a tile', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile(1);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.MARKED, tileStates.CLOSED]);
    });

    it('should show a mine in the tile after opening a tile with a mine', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.MINE, tileStates.CLOSED]);
    });
    it('should open the tile of side when is empty', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.OPENED, tileStates.OPENED]);
    });
    it('should let close the tile of side when have a mine', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.OPENED, tileStates.CLOSED]);
    });
    it('should consider not valid game when you lost and try mark a tile',  () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile();
        buscaminas.markTile(1);
        expect(buscaminas.gameState()).toBe(gameStates.LOST);
    });
    it('should show the first tile closed and the second open', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openSecondTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED]);
    });
    it('should open the tile of side when is empty, but starting for the second tile', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openSecondTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.OPENED, tileStates.OPENED]);
    });

    it('should consider that the game is lost when a mine is found', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openSecondTile();
        const expected = gameStates.LOST;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });
    it('should let close the tile of side when have a mine, but starting for the second tile', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openSecondTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED]);
    });
    it('should show a mine in the tile after opening a tile with a mine', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openSecondTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MINE]);
    });
    it('should consider when the second tile are marked it cannot be open the second tile', () => {
        const buscaminas = new Buscaminas([false, false]);
        buscaminas.markTile(2);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MARKED]);
    });
    it('should show a opened tile and a marked tile', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile();
        buscaminas.markTile(2)
        expect(buscaminas.tileState()).toStrictEqual([tileStates.OPENED, tileStates.MARKED]);
    });
    it('should win when one tile is open and one tile with mine is marked ', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile();
        buscaminas.markTile(2);
        expect(buscaminas.gameState()).toBe(gameStates.WON)
    });
    it('should lost when one tile is open and one tile with mine is open too', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile();
        buscaminas.openSecondTile();
        expect(buscaminas.gameState()).toBe(gameStates.LOST)
    });

});





