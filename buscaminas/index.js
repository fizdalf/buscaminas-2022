import {Buscaminas, gameStates} from "./buscaminas.js";
import {tileStates} from "./tile.js";

class TileCoordinates{
    get y() {
        return this._y;
    }
    get x() {
        return this._x;
    }
    constructor(positionMine, width) {
        this._x = Math.floor(positionMine / width);
        this._y = positionMine % BOARD_NUMBER_OF_ROWS
    }

}

const NUMBER_OF_MINES = 10;
const BOARD_NUMBER_OF_ROWS = 8;
window.onload = function () {
    let buscaminas;
    let tilesHTML = document.getElementsByClassName("tiles");
    function startGame() {
        // TODO: fill the array automatically
        // TODO: support non square boards
        let mines = [
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
        ]

        for (let i = 0; i < NUMBER_OF_MINES; i++) {
            let positionMine = mine();
            const coordinates = new TileCoordinates(positionMine, BOARD_NUMBER_OF_ROWS);
            mines[coordinates.x][coordinates.y] = true
        }
        buscaminas = new Buscaminas(mines);
        for (const tile of tilesHTML) {
            tile.innerHTML = ""
            tile.className = "tiles";
            tile.style.backgroundImage = "url('https://minesweeper.online/img/skins/hd/closed.svg')"
        }
    }

    function mine() {
        return Math.floor(Math.random() * 64);
    }

    startGame()
    const background = ["url('https://minesweeper.online/img/skins/hd/type0.svg')", "url('https://minesweeper.online/img/skins/hd/type1.svg')", "url('https://minesweeper.online/img/skins/hd/type2.svg')", "url('https://minesweeper.online/img/skins/hd/type3.svg')", "url('https://minesweeper.online/img/skins/hd/type3.svg')", "url('https://minesweeper.online/img/skins/hd/type4.svg')", "url('https://minesweeper.online/img/skins/hd/type5.svg')", "url('https://minesweeper.online/img/skins/hd/type6.svg')", "url('https://minesweeper.online/img/skins/hd/type7.svg')", "url('https://minesweeper.online/img/skins/hd/type8.svg')"]

    for (const [tileIndex, tile] of Object.entries(tilesHTML)) {
        tile.addEventListener("auxclick", function () {
            tile.oncontextmenu = function () {
                return false;
            }
            buscaminas.markAndUnmarkTile(Math.floor(tileIndex / BOARD_NUMBER_OF_ROWS), tileIndex % BOARD_NUMBER_OF_ROWS);
            repaintBoard();
        });
        tile.addEventListener("click", function () {
            buscaminas.openTile(Math.floor(tileIndex / BOARD_NUMBER_OF_ROWS), tileIndex % BOARD_NUMBER_OF_ROWS);
            repaintBoard();
            winOrLost();
        });
    }

    function winOrLost() {
        if (buscaminas.gameState() === gameStates.PLAYING) {
            return;
        }
        let message = "you win";

        if (buscaminas.gameState() === gameStates.LOST) {
            //TODO: reveal the mines when the game is over.
            // reveal mines && repaintBoard;
            message = "You Lose!!";
        }
        alert(message);
        startGame();
    }

    function repaintBoard() {
        let tile;

        let elements = Array.from(tilesHTML);
        //TODO: use an object/map to map the backgrounds
        for (const tileIndex in elements) {
            tile = buscaminas.tilesManager.tiles[Math.floor(tileIndex / BOARD_NUMBER_OF_ROWS)][tileIndex % BOARD_NUMBER_OF_ROWS].state();
            if (tile === tileStates.MINE) {
                tilesHTML[tileIndex].style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdXYwnM_0_H_xvrfN1h5LeeVHn4ApVKSVJeokB06aJ3pMunfKUgmuoNWwP1MeO_OoAiw&usqp=CAU')";
            } else if (tile === tileStates.MARKED) {
                tilesHTML[tileIndex].style.backgroundImage = "url('https://img2.freepng.es/20180325/kqe/kisspng-minesweeper-computer-icons-bing-maps-video-game-mines-5ab7a191c79531.0286407715219838898175.jpg')";
            } else if (tile === tileStates.CLOSED) {
                tilesHTML[tileIndex].style.backgroundImage = "url('https://minesweeper.online/img/skins/hd/closed.svg')"
            } else if (tile !== tileStates.CLOSED) {
                tilesHTML[tileIndex].style.backgroundImage = background[tile - 1]
            }
        }
    }

}