export class Buscaminas {
    _finish = false;

    openTile() {
        this._finish = true;
    }
    markTile() {
        this._finish = true;
    }
    hasLose() {
        return this._finish = false;
    }
    hasFinish() {
        return this._finish;
    }
}