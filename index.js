import Game from './src/Game';

const game = new Game(20);
game.update();
// game.play();

(function(){

	document.getElementById('play').addEventListener('click', ()=>{
		if(game.isPlaying){
			game.pause();
		}else{
			game.play();
		}
	});

	window.onblur = ()=>{
		game.pause();
	};

})();
