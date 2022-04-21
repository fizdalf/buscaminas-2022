export class Buscaminas {
    _finish = false;

    openTile() {
        this._finish = true;
    }
    isMine(mine) {
        return mine;
    }
    markTile() {
        if (this.isMine(true)){
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