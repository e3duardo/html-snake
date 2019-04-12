class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.length = 0;
    this.tail = [];
    this.lastMove = {x:0, y:0};
    this.autoMove;
  }

  move = (x, y)=>{
    clearInterval(this.autoMove);
    this.tail.push({x:this.x, y:this.y});
    while (this.tail.length>this.length) {
      this.tail.shift();
    }
    this.x+=x;
    this.y+=y;

    this.autoMove = setInterval(()=>{
        this.move(x, y);
    }, 300);
  }

  died = ()=>{
    const colideWithX = this.x < 0 || this.x >= game.width/scaleX;
    const colideWitY = this.y < 0 || this.y >= game.height/scaleY;
    let colideWithTail = false;

    for (var i = 0; i < this.tail.length; i++) {
      if(this.tail[i].x == this.x && this.tail[i].y == this.y){
        colideWithTail = true;
        break;
      }
    }

    if(colideWithX || colideWitY || colideWithTail){
      console.log('died')
      this.x = 0;
      this.y = 0;
      food = newFood();
      this.length=0;
      this.tail=[];
      clearInterval(this.autoMove);
    }
  }

  eat = ()=>{
    const colideWithFood = this.x==food.x && this.y==food.y;
    if(colideWithFood){
      food = newFood();
      this.length++;
      console.log('eat', this.length);
    }
  }

  draw = ()=>{
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x*scaleX, this.y*scaleY, scaleX, scaleY);
    for (var i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x*scaleX, this.tail[i].y*scaleY, scaleX, scaleY);
    }
  }
}
