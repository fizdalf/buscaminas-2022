require "character.php"
require "livePacman.php"
require "food.php"
class pacman implements character, livePacman{
    canKill = false;
    point = 0;
    public function listenKeyboard(){
        $this.move(key.press);
    }
    public function dead{
        if($this.distance(ghost) === 0){
            return "game over";
        }
    }
    public function kill(){
        if(this.canKill && $this.distance(ghost) === 0){
            this.point = this.point +100;
         }
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