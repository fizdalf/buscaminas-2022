import {Buscaminas, gameStates} from "./buscaminas.js";
import {TilesManager} from "./tilesManager.js";
import {Tile, tileStates} from "./tile.js";
window.onload = function () {
let buscaminas
    function startGame() {
        buscaminas = new Buscaminas([
            [true, false, false, true, false, true, false, false],
            [false, false, false, false, false, false, false, false],
            [false, true, false, false, false, true, false, false],
            [false, false, false, false, false, false, false, false],
            [false, true, false, false, false, false, false, false],
            [false, false, false, false, true, false, false, true],
            [false, false, false, false, false, true, false, false],
            [true, false, false, false, false, false, false, false]
        ]);
    }
    startGame()
    let tiles = document.getElementsByClassName("tiles");
    for (const [tileIndex, tile] of Object.entries(tiles)) {
        tile.addEventListener("auxclick", function () {
            buscaminas.markAndUnmarkTile(Math.floor(tileIndex/8), tileIndex%8);
            tileState( Math.floor(tileIndex/8) ,tileIndex%8, tileIndex);
        });
    }
        for (const [tileIndex, tile] of Object.entries(tiles)) {
            tile.addEventListener("click", function () {
                buscaminas.openTile(Math.floor(tileIndex/8), tileIndex%8);
                tileState( Math.floor(tileIndex/8) ,tileIndex%8, tileIndex);
                winOrLost()
            });
        }
        function winOrLost() {
            if(buscaminas.gameState() === gameStates.LOST) {
                startGame()
                for (const tile of tiles) {
                    tile.innerHTML = ""
                    tile.style.backgroundColor = "lightskyblue"
                }
                alert("you lost")
            }
        }
        function tileState(line, tile, tileIndex) {
            const tileState = buscaminas.tilesManager.tiles[line][tile].state() - 1
            if(tileState +1 === tileStates.MINE){
                tiles[tileIndex].style.backgroundColor = "red"
            }
            if(tileState +1 === tileStates.MARKED){
                tiles[tileIndex].style.backgroundColor = "black"
                return;
            }
            if(tileState +1 === tileStates.CLOSED){
                tiles[tileIndex].style.backgroundColor = "lightskyblue"
                return;
            }tiles[tileIndex].innerHTML = "<h1>" + tileState + "</h1>"
        }

}