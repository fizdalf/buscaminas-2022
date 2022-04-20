import {Buscaminas} from "./buscaminas";


describe('Buscaminas', () => {
    it('should consider the game is won when there is no tiles left to open', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        const expected = true;
        const output = buscaminas.hasWon();
        expect(output).toBe(expected);
    });

    it('should not consider the game won at the start of it', () => {
        const buscaminas = new Buscaminas();
        const expected = false;
        expect(buscaminas.hasWon()).toBe(expected);
    });
});
