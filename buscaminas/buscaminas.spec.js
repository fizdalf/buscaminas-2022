import {Buscaminas, gameStates} from "./buscaminas";
import {tileStates} from "./tile.js";

describe('Buscaminas', () => {
    it('should consider the game is won when there is no tiles left to open', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile(0);
        const expected = gameStates.WON;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should consider that the game is lost when a mine is found', () => {
        const buscaminas = new Buscaminas();
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
        const buscaminas = new Buscaminas();
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
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED]);
    });


    it('should show a marked tile after marking a tile', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.MARKED, tileStates.CLOSED]);
    });

    it('should show a mine in the tile after opening a tile with a mine', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.MINE, tileStates.CLOSED]);
    });

    it('should throw an error', () => {
        const throws = () => {
            throw new Error("test error");
        }
        expect(throws).toThrowError("test error");
    });
    it('should consider when the tile are marked it cannot be open the tile', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile();
        buscaminas.openTile();
        expect(buscaminas.tileState()).toStrictEqual([tileStates.MARKED, tileStates.CLOSED]);
    });
    /*it.only('should throw an error when you lost the game and mark a tile',  () => {
        const buscaminas = new Buscaminas(true);
        buscaminas.openTile();
        expect(buscaminas.markTile()).toThrow("Error")
    });*/
    it('should open the tile of side when is empty', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile(0);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.OPENED, tileStates.OPENED]);
    });
    it.only('should let close the tile of side when have a mine', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile(1);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.ONE, tileStates.CLOSED]);
    });
});



