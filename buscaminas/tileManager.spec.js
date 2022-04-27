import {TilesManager} from "./tilesManager.js";
import {tileStates} from "./tile.js";
import {Buscaminas} from "./buscaminas.js";

describe("tileManager", () => {
    it('should start the game with a closed tiles', () => {
        const tilemanager = new TilesManager([true, false, false, false]);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('should show a marked tile after marking a tile', () => {
        const tilemanager = new TilesManager([true, false, false, false]);
        tilemanager.toggleMarked(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.MARKED, tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('should show a mine in the tile after opening a tile with a mine', () => {
        const tilemanager = new TilesManager([true, false, false, false]);
        tilemanager.openTile(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.MINE, tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('it should leave tiles with mines closed when a tile next to it is opened', () => {
        const tilemanager = new TilesManager([false, true, true, true]);
        tilemanager.openTile(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.OPENED, tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('should let close the tile of side when have a mine, but starting for the second tile', () => {
        const tilemanager = new TilesManager([true, false, false, false]);
        tilemanager.openTile(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED, tileStates.OPENED, tileStates.OPENED]);
    });
    it('should let close the tile of side when have a mine, but starting for the second tile', () => {
        const tilemanager = new TilesManager([true, false, false, false]);
        tilemanager.openTile(2);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED, tileStates.OPENED, tileStates.OPENED]);
    });
    it('should show a mine in the tile after opening a tile with a mine', () => {
        const tilemanager = new TilesManager([false, true, false, false]);
        tilemanager.openTile(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MINE, tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('should consider when the second tile are marked it cannot be open', () => {
        const tilemanager = new TilesManager([true, false, false, false]);
        tilemanager.toggleMarked(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.MARKED, tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('should show a opened tile and a marked tile', () => {
        const tilemanager = new TilesManager([false, true, false, false]);
        tilemanager.openTile(0);
        tilemanager.toggleMarked(1)
        expect(tilemanager.tileState()).toStrictEqual([tileStates.OPENED, tileStates.MARKED, tileStates.OPENED, tileStates.OPENED]);
    });
    it('should unmarked when try mark a tile for the second time', () => {
        const tilemanager = new TilesManager([false, true, false, false]);
        tilemanager.toggleMarked(0);
        tilemanager.toggleMarked(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED])
    });
    it('should show the first tile closed and the second open', () => {
        const tilemanager = new TilesManager([true, false, false, false]);
        tilemanager.openTile(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED, tileStates.OPENED, tileStates.OPENED]);
    });

    it('should show two tiles close and two tiles open when we open a empty tile', function () {
        const tilemanager = new TilesManager([false, true, true, false]);
        tilemanager.openTile(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.OPENED, tileStates.CLOSED, tileStates.CLOSED, tileStates.OPENED]);
    });
    it('should show two tiles close and two tiles open when we open a empty tile', function () {
        const tilemanager = new TilesManager([true, false, false, true]);
        tilemanager.openTile(1);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.CLOSED, tileStates.OPENED, tileStates.OPENED, tileStates.CLOSED]);
    });
    it('should show a mine tile when open a tile with mine and leave closed the rest', function () {
        const tilemanager = new TilesManager([true, false, false, true]);
        tilemanager.openTile(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.MINE, tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]);
    });
    it('should open a tile a leave the rest closed when have mine', function () {
        const tilemanager = new TilesManager([false, true, true, true]);
        tilemanager.openTile(0);
        expect(tilemanager.tileState()).toStrictEqual([tileStates.OPENED, tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]);
    });

});