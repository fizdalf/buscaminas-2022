import {Buscaminas, gameStates} from "./buscaminas";
import {Tile, tileStates} from "./tile.js";

describe('Buscaminas', () => {
    it('should consider the game is won when there is no tiles left to open', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.markTile(1);
        const expected = gameStates.WON;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
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
    it('should consider that the game is won when tiles with mine are marked', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.markTile(1);
        const expected = gameStates.WON;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });
    it('should consider that the game is not won when tiles empty are marked', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.markTile(2);
        const expected = gameStates.PLAYING;
        const output = buscaminas.gameState();
        expect(output).toBe(expected);
    });

    it('should start the game with a closed tiles', () => {
        const buscaminas = new Buscaminas([true, false]);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED]);
    });


    it('should show a marked tile after marking a tile', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.markTile(1);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.MARKED, tileStates.CLOSED]);
    });

    it('should show a mine in the tile after opening a tile with a mine', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile(0);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.MINE, tileStates.CLOSED]);
    });

    it('it should leave tiles with mines closed when a tile next to it is opened', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile(0);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.OPENED, tileStates.CLOSED]);
    });
    it('should not allow mark a tile when you lost',  () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile(0);
        buscaminas.markTile(1);
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
    it('should let close the tile of side when have a mine, but starting for the second tile', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.openTile(1);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED]);
    });
    it('should show a mine in the tile after opening a tile with a mine', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile(1);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MINE]);
    });
    it('should consider when the second tile are marked it cannot be open the second tile', () => {
        const buscaminas = new Buscaminas([true, false]);
        buscaminas.markTile(2);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MARKED]);
    });
    it('should show a opened tile and a marked tile', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile(0);
        buscaminas.markTile(2)
        expect(buscaminas.tileState()).toStrictEqual([tileStates.OPENED, tileStates.MARKED]);
    });
    it('should win when one tile is open and one tile with mine is marked ', () => {
        const buscaminas = new Buscaminas([false, true]);
        buscaminas.openTile(0);
        buscaminas.markTile(2);
        expect(buscaminas.gameState()).toBe(gameStates.WON)
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
    it('should unmarked when try mark a tile for the second time', () => {
        const buscaminas = new Buscaminas([false, true])
        buscaminas.markTile(1);
        buscaminas.markTile(1);
        expect(buscaminas.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED])
    });
});
describe("Tile", () => {
   it("should return false when received false", () => {
       const tile = new Tile(false)
       expect(tile.hasMine()).toBe(false)
   });
    it("should return true when received true", () => {
        const tile = new Tile(true)
        expect(tile.hasMine()).toBe(true)
    });
    it("should show marked tile", () => {
        const tile = new Tile()
        tile.setMarked()
        expect(tile.state()).toBe(tileStates.MARKED)
    });
    it("should show opened tile", () => {
        const tile = new Tile()
        tile.openTile()
        expect(tile.state()).toBe(tileStates.OPENED)
    });
    it("should show tile with mine", () => {
        const tile = new Tile(true)
        tile.openTile()
        expect(tile.state()).toBe(tileStates.MINE)
    });
    
    

});