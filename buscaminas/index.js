import {Buscaminas, gameStates} from "./buscaminas.js";
import {tileStates} from "./tile.js";
window.onload = function () {
let buscaminas;
    function startGame() {
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

        for (let i = 0; i < 10; i++) {
            let positionMine = mine()
            mines[Math.floor(positionMine/8)][positionMine%8] = true
        }
        buscaminas = new Buscaminas(mines);
    }
    function mine() {
        return Math.floor(Math.random() * 64);
    }
    startGame()
    const background = ["url('https://minesweeper.online/img/skins/hd/type0.svg')", "url('https://minesweeper.online/img/skins/hd/type1.svg')", "url('https://minesweeper.online/img/skins/hd/type2.svg')", "url('https://minesweeper.online/img/skins/hd/type3.svg')", "url('https://minesweeper.online/img/skins/hd/type3.svg')", "url('https://minesweeper.online/img/skins/hd/type4.svg')", "url('https://minesweeper.online/img/skins/hd/type5.svg')", "url('https://minesweeper.online/img/skins/hd/type6.svg')", "url('https://minesweeper.online/img/skins/hd/type7.svg')", "url('https://minesweeper.online/img/skins/hd/type8.svg')"]
    let tilesHTML = document.getElementsByClassName("tiles");
    for (const [tileIndex, tile] of Object.entries(tilesHTML)) {
        tile.addEventListener("auxclick", function () {
            tile.oncontextmenu = function() {return false;}
            buscaminas.markAndUnmarkTile(Math.floor(tileIndex/8), tileIndex%8);
            openAndMarkTiles();
        });
    }
        for (const [tileIndex, tile] of Object.entries(tilesHTML)) {
            tile.addEventListener("click", function () {
                buscaminas.openTile(Math.floor(tileIndex/8), tileIndex%8);
                openAndMarkTiles();
                winOrLost();
            });
        }
        function winOrLost() {
            if(buscaminas.gameState() === gameStates.LOST) {
                startGame()
                for (const tile of tilesHTML) {
                    tile.innerHTML = ""
                    tile.className = "tiles";
                    tile.style.backgroundImage ="url('https://minesweeper.online/img/skins/hd/closed.svg')"
                }
               alert("you lost")
            }
            else if(buscaminas.gameState() === gameStates.WON){
                startGame()
                for (const tile of tilesHTML) {
                    tile.innerHTML = ""
                    tile.className = "tiles";
                    tile.style.backgroundImage ="url('https://minesweeper.online/img/skins/hd/closed.svg')"
                }
                alert("you win")
            }
        }
        function openAndMarkTiles() {
            let tile;
            for(const tileIndex in tilesHTML){
                tile = buscaminas.tilesManager.tiles[Math.floor(tileIndex/8)][tileIndex%8].state();
                if(tile === tileStates.MINE){
                    tilesHTML[tileIndex].style.backgroundImage ="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdXYwnM_0_H_xvrfN1h5LeeVHn4ApVKSVJeokB06aJ3pMunfKUgmuoNWwP1MeO_OoAiw&usqp=CAU')";
                    winOrLost();
                }
                else if(tile === tileStates.MARKED){
                    console.log(tile)
                    tilesHTML[tileIndex].style.backgroundImage ="url('https://img2.freepng.es/20180325/kqe/kisspng-minesweeper-computer-icons-bing-maps-video-game-mines-5ab7a191c79531.0286407715219838898175.jpg')";
                }
                else if(tile === tileStates.CLOSED){
                    tilesHTML[tileIndex].style.backgroundImage = "url('https://minesweeper.online/img/skins/hd/closed.svg')"
                }
                else if(tile !== tileStates.CLOSED){
                    tilesHTML[tileIndex].style.backgroundImage = background[tile -1]
                }
            }
        }

}