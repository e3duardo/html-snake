class SnakeBlock {
	constructor(game, tag) {
		this.snakeBlockTag = tag;
		if(tag==undefined){
			const tag = document.createElement("div");
			tag.className = "Snack Block";
			tag.style = "left: "+(game.snake.x*game.scaleX)+"px; top: "+(game.snake.y*game.scaleY)+"px";
			this.snakeBlockTag = game.sceneTag.appendChild(tag);
		}
		this.game = game;
		this.x = this.snakeBlockTag.offsetLeft/this.game.scaleX;
		this.y = this.snakeBlockTag.offsetTop/this.game.scaleY;
	}

	update = ()=>{
		this.snakeBlockTag.style.left = (this.x*this.game.scaleX) +'px';
		this.snakeBlockTag.style.top = (this.y*this.game.scaleY) +'px';
	}

	colideWith = (object)=>{
 	  return this.x==object.x && this.y==object.y;
   }

	colideWithStage = ()=>{
		const colideWithX = this.x < 0 || this.x >= this.game.width/this.game.scaleX;
		const colideWithY = this.y < 0 || this.y >= this.game.height/this.game.scaleY;

		return colideWithX || colideWithY;
	}

	destroy = ()=>{
		this.snakeBlockTag.parentNode.removeChild(this.snakeBlockTag);
	}

}

export {SnakeBlock as default};
