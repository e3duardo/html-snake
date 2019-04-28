import Block from './Block';

class Food extends Block {
	constructor(game) {
		super(game, document.querySelector('.Food'));

		this.randomize();
		this.value = 10;
	}

	randomize = ()=>{
		this.x = Math.floor((Math.random() * (this.game.width / this.game.scale)));
		this.y = Math.floor((Math.random() * (this.game.height / this.game.scale)));
	}
}

export {Food as default};
