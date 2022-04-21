import {Buscaminas} from "./buscaminas";
describe('Buscaminas', () => {
    it('should consider the game is won when there is no tiles left to open', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        const expected = true;
        const output = buscaminas.hasWon();
        expect(output).toBe(expected);
    });

    it('should consider the tile is a mine', () => {
        const buscaminas = new Buscaminas();
        const expected = true;
        expect(buscaminas.isMine(true)).toBe(expected);
    });
    it('should consider the tile is not a mine', () => {
        const buscaminas = new Buscaminas();
        const expected = false;
        expect(buscaminas.isMine(false)).toBe(expected);
    });

    it('should consider that the game is lost when a mine is found', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        const expected = false;
        const output = buscaminas.hasLose();
        expect(output).toBe(expected);
    });

    it('should not consider the game won at the start of it', () => {
        const buscaminas = new Buscaminas();
        const expected = false;
        expect(buscaminas.hasWon()).toBe(expected);
    });
    it('should consider that the game is won when tiles are marked', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile();
        const expected = true;
        const output = buscaminas.hasWon();
        expect(output).toBe(expected);
    });
});



