export class Buscaminas {
    _finish = false;

    openTile() {
        this._finish = true;
    }
    isMine() {
        return true;
    }
    markTile() {
        if (this.isMine()){
            this._finish = true;
        }
    }

    hasLose() {
        return this._finish = false;
    }
    hasWon() {
        return this._finish;
    }
}