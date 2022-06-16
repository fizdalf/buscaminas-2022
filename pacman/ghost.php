require "character.php"

class ghost extends character{
    color;
    isDead = false;
    constructor(color){
       this.color = color
    }
    public function movement(){
        $this.move(array_rand(["UP", "DOWN", "RIGHT", "LEFT"], 1));
    }
    public function dead(pacman){
        if(this.distance(pacman) === 0 && pacman.canKill){
            this.isDead = true;
            this.revive();
        }
    }

    public function revive(){
        stop(4s);
        this.isDead = false;
    }

    public function distance(pacman){
        return distanceObject;
    }
}