import Food from './Food';
import Snake from './Snake';
import Score from './Score';

import swipedetect from '../swipedetect';

class Game {
	constructor(scale){
		this.scale = scale;
		this.playing;
		this.playingInterval;

		this.stageTag = document.querySelector('.Stage');
		this.sceneTag = document.querySelector('.Scene');

		this.sceneTag.style.backgroundSize = scale+'px';

		this.snake = new Snake(this);
		this.food = new Food(this);
		this.score = new Score(this);
		this.resize();

		document.addEventListener('keydown', e => this.moveSnake(e));
		window.addEventListener('resize', e => this.resize(e));

		swipedetect(this.sceneTag, (swipedir)=>{
			if(swipedir === 'up'){
				this.moveSnake({key:'ArrowUp'});
			}
			if(swipedir === 'right'){
				this.moveSnake({key:'ArrowRight'});
			}
			if(swipedir === 'down'){
				this.moveSnake({key:'ArrowDown'});
			}
			if(swipedir === 'left'){
				this.moveSnake({key:'ArrowLeft'});
			}
		});
	}

	resize = ()=>{
		this.sceneTag.style.width = Math.floor(this.stageTag.offsetWidth/this.scale-10)*this.scale+'px';
		this.sceneTag.style.height = Math.floor(this.stageTag.offsetHeight/this.scale-1)*this.scale+'px';
		this.food.randomize();
	}
	update = ()=>{
		this.snake.update();
		this.food.update();
		this.score.update();
	}

	play = (x, y)=>{
		this.playingInterval = setInterval(this.update, 0);
		this.playing = true;

		if(this.snake.autoMove != null || (x!=undefined && y!=undefined)){
			if(x==undefined && y==undefined){
				x=this.snake.autoMove.x;
				y=this.snake.autoMove.y;
			}
			this.snake.move(x, y);
			this.snake.autoMove = null;
		}

		document.getElementById('play').innerHTML = 'Pause';
	}
	pause = ()=>{
		clearInterval(this.playingInterval);
		this.playing = false;
		document.getElementById('play').innerHTML = 'Play';
	}

	moveSnake = (e)=>{

		switch (e.key) {
		case 'ArrowLeft':
			if(!this.isPlaying){
				this.play(-1, 0);
			}else{
				this.snake.move(-1,0);
			}
			break;
		case 'ArrowUp':
			if(!this.isPlaying){
				this.play(0, -1);
			}else{
				this.snake.move(0,-1);
			}
			break;
		case 'ArrowRight':
			if(!this.isPlaying){
				this.play(1, 0);
			}else{
				this.snake.move(1,0);
			}
			break;
		case 'ArrowDown':
			if(!this.isPlaying){
				this.play(0, 1);
			}else{
				this.snake.move(0,1);
			}
			break;
		case ' ':
			if(this.isPlaying){
				this.pause();
			}else{
				this.play();
			}
			break;
		}

	}

	get isPlaying (){
		return this.playing;
	}
	get width (){
		return this.sceneTag.offsetWidth;
	}
	get height (){
		return this.sceneTag.offsetHeight;
	}
}

export { Game as default };
