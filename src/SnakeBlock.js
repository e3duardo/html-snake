import Block from './Block';

class SnakeBlock extends Block{
	constructor(snake, tag) {
		if(tag==undefined){
			tag = document.createElement('div');
			tag.className = 'Snack Block';
			tag = snake.game.sceneTag.appendChild(tag);
		}
		super(snake.game, tag);
		this.x = snake.x;
		this.y = snake.y;
	}

}

export {SnakeBlock as default};
