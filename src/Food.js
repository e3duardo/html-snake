class Food {
  constructor(game) {
	  this.foodTag = document.querySelector('.Food');
	  this.game = game;
	  this.randominize();
	  this.x = 0;
	  this.y = 0;
	  this.value = 10;
  }

  randominize = ()=>{
	  this.x = Math.floor((Math.random() * (this.game.width / this.game.scaleX)));
	  this.y = Math.floor((Math.random() * (this.game.height / this.game.scaleY)));
  }

  update = ()=>{
	  this.foodTag.style.left = (this.x*this.game.scaleX) +'px';
	  this.foodTag.style.top = (this.y*this.game.scaleY) +'px';
  }
}

export {Food as default};
