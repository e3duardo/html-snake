var score = document.querySelector('#score');
var deths = document.querySelector('#deths');
var bestScore = document.querySelector('#bestScore');

import SnakeBlock from './SnakeBlock';

class Snake {
	constructor(game) {
		// this.snakeTag = document.querySelector('.Snake');
		this.game = game;
		this.autoMoveInterval;

		this.tail = [];
		this.length = 0;

		this.blocks = [];
		const divs = document.querySelectorAll('.Snake');
		for (let i = 0; i < divs.length; ++i) {
			const block = new SnakeBlock(this.game, divs[i]);
			this.blocks.push(block);
		}

		this.autoMove = null;
	}

	update = ()=>{
		for (let i = 0; i < this.blocks.length; ++i) {
			this.blocks[i].update();
		}
	}

	move = (x, y, auto)=>{
		clearInterval(this.autoMoveInterval);

		if(this.game.isPlaying){
			//moving references
			this.tail.push({x: this.x, y: this.y});
			while (this.tail.length > this.length) {
			  this.tail.shift();
			}
			this.x+=x;
			this.y+=y;
			for (let i = 0; i < this.tail.length; ++i) {
				this.blocks[i+1].x = this.tail[i].x;
				this.blocks[i+1].y = this.tail[i].y;
			}

			//automoving
			this.autoMoveInterval = setInterval(()=>{
				this.move(x, y, true);
			}, 300);

			//eat
			if(this.blocks[0].colideWith(this.game.food)){
				this.eat();
			}

			if(this.blocks[0].colideWithStage() || this.colideWithTail()){
				this.died();
			}
		}else if(auto){
			this.autoMove = {x: x, y: y};
		}
	}

	colideWithTail = ()=>{
		for (var i = 1; i < this.tail.length; i++) {
			if(this.blocks[0].colideWith(this.blocks[i])){
				return true;
			}
		}
		return false;
	}

	eat = ()=>{
		this.game.score.tick();
		this.game.food.randominize();

		this.length++;
		this.blocks.push(new SnakeBlock(this.game));
	}

	died = ()=>{
		this.game.score.tickDeath()
		this.game.food.randominize();

		clearInterval(this.autoMoveInterval);

		while(this.blocks.length>1){
			this.blocks.shift().destroy();
		}
		this.x = 0;
		this.y = 0;
		this.length=0;
	}

	get x (){
		return this.blocks[0].x;
	}
	set x (x){
		return this.blocks[0].x = x;
	}
	get y (){
		return this.blocks[0].y;
	}
	set y (y){
		return this.blocks[0].y = y;
	}
}

export {Snake as default};
