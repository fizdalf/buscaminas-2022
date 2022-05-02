import {TilesManager} from "./tilesManager.js";
import {tileStates} from "./tile.js";

describe("tileManager", () => {
    it('should start the game with a closed tiles', () => {
        const tilemanager = new TilesManager([[true, false], [false, false]]);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should show a marked tile after marking a tile', () => {
        const tilemanager = new TilesManager([[true, false], [false, false]]);
        tilemanager.toggleMarked(0, 0);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.MARKED, tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should show a mine in the tile after opening a tile with a mine', () => {
        const tilemanager = new TilesManager([[true, false], [false, false]]);
        tilemanager.openTile(0, 0);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.MINE, tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should show a tile open and a tile with mine', () => {
        const tilemanager = new TilesManager([[false, true], [false, false]]);
        tilemanager.openTile(0, 0);
        tilemanager.openTile(0, 1);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.ONE, tileStates.MINE], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('it should leave tiles with mines closed when a tile next to it is opened', () => {
        const tilemanager = new TilesManager([[false, true], [true, true]]);
        tilemanager.openTile(0, 0);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.THREE, tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should let close all tiles are not empty', () => {
        const tilemanager = new TilesManager([[true, false], [false, false]]);
        tilemanager.openTile(0, 1);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.ONE], [tileStates.CLOSED, tileStates.CLOSED]]);
    });

    it('should show a mine in the tile after opening a tile with a mine', () => {
        const tilemanager = new TilesManager([[false, true], [false, false]]);
        tilemanager.openTile(0, 1);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.MINE], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should consider when the second tile are marked it cannot be open', () => {
        const tilemanager = new TilesManager([[true, false], [false, false]]);
        tilemanager.toggleMarked(0, 1);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.MARKED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should show a opened tile and a marked tile', () => {
        const tilemanager = new TilesManager([[false, true], [false, false]]);
        tilemanager.openTile(0, 0);
        tilemanager.toggleMarked(0, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.ONE, tileStates.MARKED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should unmarked when try mark a tile for the second time', () => {
        const tilemanager = new TilesManager([[false, true], [false, false]]);
        tilemanager.toggleMarked(0, 0);
        tilemanager.toggleMarked(0, 0);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED]])
    });
    it('should show the first tile closed and the second open', () => {
        const tilemanager = new TilesManager([[true, false], [false, false]]);
        tilemanager.openTile(0, 1);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.ONE], [tileStates.CLOSED, tileStates.CLOSED]]);
    });

    it('should show two tiles close and two tiles open when we open a empty tile', function () {
        const tilemanager = new TilesManager([[false, true], [true, false]]);
        tilemanager.openTile(0, 0);
        tilemanager.openTile(1, 1);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.TWO, tileStates.CLOSED], [tileStates.CLOSED, tileStates.TWO]]);
    });
    it('should show two tiles close and two tiles open when we open a empty tile', function () {
        const tilemanager = new TilesManager([[true, false], [false, true]]);
        tilemanager.openTile(0, 0);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.TWO], [tileStates.TWO, tileStates.CLOSED]]);
    });
    it('should show a mine tile when open a tile with mine and leave closed the rest', function () {
        const tilemanager = new TilesManager([[true, false], [false, true]]);
        tilemanager.openTile(0, 0);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.MINE, tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should open a tile and let the rest closed when have mine', function () {
        const tilemanager = new TilesManager([[false, true], [true, true]]);
        tilemanager.openTile(0, 0);
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.THREE, tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should have one mine when the tile have one', function () {
        const tilemanager = new TilesManager([[true, false], [false, false]])
        tilemanager.openTile(0, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.ONE], [tileStates.CLOSED, tileStates.CLOSED]]);
    });

    it('should have two mines when the tiles have two', function () {
        const tilemanager = new TilesManager([[true, false], [true, false]])
        tilemanager.openTile(0, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.TWO], [tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should have three mines when the tiles have three', function () {
        const tilemanager = new TilesManager([[true, true], [true, false]])
        tilemanager.openTile(1, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED], [tileStates.CLOSED, tileStates.THREE]]);
    });
    it('should have four mines when the tiles have four', function () {
        const tilemanager = new TilesManager([[true, true, false], [true, false, false], [true, false, false]])
        tilemanager.openTile(1, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED ,tileStates.CLOSED], [tileStates.CLOSED, tileStates.FOUR, tileStates.CLOSED],[tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should have five mines when the tiles have five', function () {
        const tilemanager = new TilesManager([[true, true, false], [true, false, true], [true, false, false]])
        tilemanager.openTile(1, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED ,tileStates.CLOSED], [tileStates.CLOSED, tileStates.FIVE, tileStates.CLOSED],[tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should have six mines when the tiles have six', function () {
        const tilemanager = new TilesManager([[true, true, true], [true, false, true], [true, false, false]])
        tilemanager.openTile(1, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED ,tileStates.CLOSED], [tileStates.CLOSED, tileStates.SIX, tileStates.CLOSED],[tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should have seven mines when the tiles have seven', function () {
        const tilemanager = new TilesManager([[true, true, true], [true, false, true], [true, true, false]])
        tilemanager.openTile(1, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED ,tileStates.CLOSED], [tileStates.CLOSED, tileStates.SEVEN, tileStates.CLOSED],[tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should have eight mines when the tiles have eight', function () {
        const tilemanager = new TilesManager([[true, true, true], [true, false, true], [true, true, true]])
        tilemanager.openTile(1, 1)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED ,tileStates.CLOSED], [tileStates.CLOSED, tileStates.EIGHT, tileStates.CLOSED],[tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should open the tiles of side and show the number of mines around every tiles', function () {
        const tilemanager = new TilesManager([[true, true, false], [true, false, false], [true, false, false]])
        tilemanager.openTile(2, 2)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.CLOSED, tileStates.CLOSED ,tileStates.CLOSED], [tileStates.CLOSED, tileStates.FOUR, tileStates.ONE],[tileStates.CLOSED, tileStates.TWO, tileStates.EMPTY]]);
    });
    it('should show the number of mines around the first tile', function () {
        const tilemanager = new TilesManager([[false, false, true], [true, true, true], [false, true, false]])
        tilemanager.openTile(0, 0)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.TWO, tileStates.CLOSED ,tileStates.CLOSED], [tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED],[tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]]);
    });
    it('should show the open the tiles around the first tile', function () {
        const tilemanager = new TilesManager([[false, false, true], [false, false, true], [false, true, true]])
        tilemanager.openTile(0, 0)
        expect(tilemanager.tileState()).toStrictEqual([[tileStates.EMPTY, tileStates.TWO ,tileStates.CLOSED], [tileStates.ONE, tileStates.FOUR, tileStates.CLOSED],[tileStates.CLOSED, tileStates.CLOSED, tileStates.CLOSED]]);
    });
});