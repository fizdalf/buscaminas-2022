import {Tile, tileStates} from "./tile.js";

describe("Tile", () => {
    it("should show marked tile", () => {
        const tile = new Tile()
        tile.toggleMarked()
        expect(tile.state()).toBe(tileStates.MARKED)
    });
    it("should show opened tile", () => {
        const tile = new Tile()
        tile.openTile()
        expect(tile.state()).toBe(tileStates.EMPTY)
    });
    it("should show tile with mine", () => {
        const tile = new Tile(true)
        tile.openTile()
        expect(tile.state()).toBe(tileStates.MINE)
    });
    it("should unmarked tile when try marked for second time", () =>{
        const tile = new Tile(true)
        tile.toggleMarked()
        tile.toggleMarked()
        expect(tile.state()).toBe(tileStates.CLOSED)
    });
});