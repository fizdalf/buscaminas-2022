import {Buscaminas} from "./buscaminas";


describe('Buscaminas', () => {
    it('should consider the game is won when there is no tiles left to open', () => {
        const buscaminas = new Buscaminas();
        buscaminas.openTile();
        const expected = true;
        const output = buscaminas.hasFinish();
        expect(output).toBe(expected);
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
        expect(buscaminas.hasFinish()).toBe(expected);
    });
    it('should consider that the game is won when tiles are marked', () => {
        const buscaminas = new Buscaminas();
        buscaminas.markTile();
        const expected = true;
        const output = buscaminas.hasFinish();
        expect(output).toBe(expected);
    });
});


