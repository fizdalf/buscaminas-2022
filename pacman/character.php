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
        return "is move to up";
    }
    public function down(){
        return "is move to down";
    }
    public function right(){
        return "is move to right";
    }
    public function left(){
       return "is move to left";
    }
}