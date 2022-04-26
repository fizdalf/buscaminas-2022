import {Tile, tileStates} from "./tile.js";

describe("Tile", () => {
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
    it("should unmarked tile when try marked for second time", () =>{
        const tile = new Tile(true)
        tile.setMarked()
        tile.setMarked()
        expect(tile.state()).toBe(tileStates.CLOSED)
    });
});