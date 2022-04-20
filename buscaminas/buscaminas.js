export class Buscaminas {
    _hasWon = false;

    openTile() {
        this._hasWon = true;
    }

    hasWon() {
        return this._hasWon;
    }
}