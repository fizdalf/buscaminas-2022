class character {
    protected direction;
    public function move(direction){
         if(direction === "UP"){
            $this->up();
         }
         if(direction === "DOWN"){
            $this->down();
         }
         if(direction === "RIGHT"){
            $this->right();
         }
         if(direction === "LEFT"){
            $this->left();
         }
    }
    public function up(){
        return "pacman is move to up";
    }
    public function down(){
        return "pacman is move to down";
    }
    public function right(){
        return "pacman is move to right";
    }
    public function left(){
       return "pacman is move to left";
    }
}