class Block {
	constructor(game, tag) {
		this.game = game;
		this.tag = tag;
		this.tag.style.backgroundSize = this.game.scale+'px';
		this.tag.style.width = this.game.scale+'px';
		this.tag.style.height = this.game.scale+'px';
		this.x = 0;
		this.y = 0;
	}

	update = ()=>{
		this.tag.style.left = (this.x*this.game.scale) +'px';
		this.tag.style.top = (this.y*this.game.scale) +'px';
	}

	destroy = ()=>{
		this.tag.parentNode.removeChild(this.tag);
	}

	colideWith = (object)=>{
		return this.x==object.x && this.y==object.y;
	}

	colideWithStage = ()=>{
		const colideWithX = this.x < 0 || this.x >= this.game.width/this.game.scale;
		const colideWithY = this.y < 0 || this.y >= this.game.height/this.game.scale;

		return colideWithX || colideWithY;
	}
}

export {Block as default};
