require "character.php"
require "killerOrKillablePacman.php"
require "food.php"
class pacman implements character, killable, killer{
    canKill = false;
    public function listenKeyboard(){
        $this.move(key.press);
    }
    public function dead(ghost){
        return "game over";
    }
    public function kill(ghost){
        this.point = this.point +100;
    }
    public function killerOrVictim(ghost){
        if(this.canKill){
            this.kill(ghost);
            ghost.dead();
            return;
        }
        this.dead(ghost);
    }

    public function distance(object){
        return distanceObject;
    }
    public function eat(food){
        if(food.isBigFood){
            this.canKill = true;
        }
        point++
    }
}