require "character.php"

class ghost extends character{
    public function movement(){
        $this.move(array_rand(["UP", "DOWN", "RIGHT", "LEFT"], 1));
    }
}