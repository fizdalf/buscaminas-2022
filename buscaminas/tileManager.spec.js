import {TilesManager} from "./tilesManager.js";
import {tileStates} from "./tile.js";
import {Buscaminas} from "./buscaminas.js";

describe("tileManager", () => {
    it('should start the game with a closed tiles', () => {
        const tilemanager = new TilesManager([true, false]);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('should show a marked tile after marking a tile', () => {
        const tilemanager = new TilesManager([true, false]);
        tilemanager.toggleMarked(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.MARKED, tileStates.CLOSED]);
    });
    it('should show a mine in the tile after opening a tile with a mine', () => {
        const tilemanager = new TilesManager([true, false]);
        tilemanager.openTile(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.MINE, tileStates.CLOSED]);
    });
    it('it should leave tiles with mines closed when a tile next to it is opened', () => {
        const tilemanager = new TilesManager([false, true]);
        tilemanager.openTile(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.OPENED, tileStates.CLOSED]);
    });
    it('should let close the tile of side when have a mine, but starting for the second tile', () => {
        const tilemanager = new TilesManager([true, false]);
        tilemanager.openTile(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED]);
    });
    it('should show a mine in the tile after opening a tile with a mine', () => {
        const tilemanager = new TilesManager([false, true]);
        tilemanager.openTile(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MINE]);
    });
    it('should consider when the second tile are marked it cannot be open', () => {
        const tilemanager = new TilesManager([true, false]);
        tilemanager.toggleMarked(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MARKED]);
    });
    it('should show a opened tile and a marked tile', () => {
        const tilemanager = new TilesManager([false, true]);
        tilemanager.openTile(0);
        tilemanager.toggleMarked(1)
        expect(tilemanager.tileState()).toStrictEqual([tileStates.OPENED, tileStates.MARKED]);
    });
    it('should unmarked when try mark a tile for the second time', () => {
        const tilemanager = new TilesManager([false, true]);
        tilemanager.toggleMarked(0);
        tilemanager.toggleMarked(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED])
    });
});