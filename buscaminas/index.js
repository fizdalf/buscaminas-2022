import {Buscaminas, gameStates} from "./buscaminas.js";
import {tileStates} from "./tile.js";
window.onload = function () {
let buscaminas
    function startGame() {
        let mines = []
        for (let i = 0; i < 8; i++) {
            mines.push(mine())
        }
        buscaminas = new Buscaminas(mines);
    }
    function mine() {
        let numberMine = 0
        let mine = [];
        for (let i = 0; i < 8; i++) {
            if([true, false][Math.round(Math.random())] && numberMine < 2){
                mine.push(true)
                numberMine++
                continue;
            }mine.push(false)
        }return mine;
    }
    startGame()
    let tilesHTML = document.getElementsByClassName("tiles");
    for (const [tileIndex, tile] of Object.entries(tilesHTML)) {
        tile.addEventListener("auxclick", function () {
            buscaminas.markAndUnmarkTile(Math.floor(tileIndex/8), tileIndex%8);
            openAndMarkTiles();
        });
    }
        for (const [tileIndex, tile] of Object.entries(tilesHTML)) {
            tile.addEventListener("click", function () {
                buscaminas.openTile(Math.floor(tileIndex/8), tileIndex%8);
                openAndMarkTiles();
                winOrLost()
            });
        }
        function winOrLost() {
            if(buscaminas.gameState() === gameStates.LOST) {
                startGame()
                for (const tile of tilesHTML) {
                    tile.innerHTML = ""
                    tile.className = "tiles";
                    tile.style.backgroundColor = "cyan"
                }
               alert("you lost")
            }
            else if(buscaminas.gameState() === gameStates.WON){
                startGame()
                for (const tile of tilesHTML) {
                    tile.innerHTML = ""
                    tile.className = "tiles";
                    tile.style.backgroundColor = "cyan"
                }
                alert("you win")
            }
        }
        function openAndMarkTiles() {
            for(const tileIndex in tilesHTML){
                let tile = buscaminas.tilesManager.tiles[Math.floor(tileIndex/8)][tileIndex%8].state()
                if(tile === tileStates.MINE){
                    tilesHTML[tileIndex].className += " Mi";
                    winOrLost()
                }
                else if(tile === tileStates.MARKED){
                    tilesHTML[tileIndex].className += " Ma";
                }
                else if(tile === tileStates.CLOSED){
                    tilesHTML[tileIndex].className = "tiles";
                }
                else if(tile === tileStates.EMPTY){
                    tilesHTML[tileIndex].style.backgroundColor = "lightskyblue"
                }
                else if(tile !== tileStates.CLOSED){
                    tilesHTML[tileIndex].style.backgroundColor = "lightskyblue"
                    tilesHTML[tileIndex].innerHTML = "<h1>" + (tile -1) + "</h1>"
                }
            }
        }

}