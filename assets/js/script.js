let playing = true;
const game = document.getElementById("game");
const ctx = game.getContext("2d");
const scaleX = game.width/20;
const scaleY = game.height/20;

var bk = new Image();
bk.src = "assets/images/bg.png";

const snake = new Snake();

ctx.fillRect(Math.floor((Math.random() * 10) + 1), 0, scaleX, scaleY);

const draw = ()=>{
  ctx.clearRect(0, 0, game.width, game.height);
  ctx.fillRect(0, 0, game.width, game.height);
  ctx.drawImage(bk,0,0);

  snake.eat();
  snake.died();
  snake.draw();

  ctx.fillStyle = "#545454";
  ctx.fillRect(food.x*scaleX, food.y*scaleY, scaleX, scaleY);
}


const newFood = ()=>{
  const foodX = Math.floor((Math.random() * game.width/scaleX));
  const foodY = Math.floor((Math.random() * game.height/scaleY));
  return {x:foodX, y:foodY};
}
let food = newFood();

document.addEventListener("keydown", function(e){
  switch (e.key) {
    case "ArrowLeft":
      snake.move(-1,0);
    break;
    case "ArrowUp":
      snake.move(0,-1);
    break;
    case "ArrowRight":
      snake.move(1,0);
    break;
    case "ArrowDown":
      snake.move(0,1);
    break;
  }
}, false);


setInterval(draw, 0);
