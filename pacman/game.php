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
            pacman.movement();
            ghostPink.movement();
            ghostRed.movement();
            ghostGreen.movement();
            ghostBlue.movement();
            pacman.dead(ghostRed);
            pacman.kill(ghostRed);
            pacman.dead(ghostBlue);
            pacman.kill(ghostBlue);
            pacman.dead(ghostGreen);
            pacman.kill(ghostGreen);
            pacman.dead(ghostPink);
            pacman.kill(ghostPink);
            ghostPink.isDead(pacman);
            ghostRed.isDead(pacman);
            ghostGreen.isDead(pacman);
            ghostBlue.isDead(pacman);
            pacman.eat(food);
            this.point = this.point + pacman.point;
        }
    }
}