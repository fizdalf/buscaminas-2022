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
        else{
            return false
        }
    }

    hasLose() {
        return this._finish = false;
    }
    hasWon() {
        return this._finish;
    }
    status(_status) {
        if (_status == "close"){
            return 0;
        }
        else if (_status == "open"){
            return 1;
        }
        else if (_status == "mine"){
            return 2;
        }
        else if (_status == "marked"){
            return 3;
        }
    }
}