require "pacman.php"
require "ghost.php"
require "food.php"
class game{
    point = 0;
    pacman = new pacman();
    ghostRed = new ghost(red);
    ghostGreen = new ghost(green);
    ghostPink = new ghost(pink);
    ghostBlue = new ghost(blue);

    public function createFood{
        count = 0;
        while($count < 100){
            food = new food(array_rand([true, false], 1));
            $count++;
        }
    }

    public function initGame{
        this.createFood;
        while(true){
            pacman.listenKeyboard();
            ghostPink.movement();
            ghostRed.movement();
            ghostGreen.movement();
            ghostBlue.movement();
            if(this.distance(ghost) === 0){
                pacman.killerOrVictim(ghostRed);
                pacman.killerOrVictim(ghostBlue);
                pacman.killerOrVictim(ghostGreen);
                pacman.killerOrVictim(ghostPink);
            }
            pacman.eat(food);
            this.point = this.point + pacman.point;
        }
    }
}