class Cannon extends BaseClass {
    constructor(x,y){
      super(x,y,150,150);
      this.image = loadImage("sprites/cannon.png");
      this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
      //console.log(cannon.body);
      //this.cannon.depth = this.bird.depth + 1;
  
      Cannon.hide();
      if(this.body.velocity.x > 10 && this.body.position.x > 250){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
    }
  }
