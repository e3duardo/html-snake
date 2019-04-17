import Game from './src/Game'

const game = new Game();
game.update();
// game.play();

(function(){

	document.getElementById('play').addEventListener("click", function(e) {
		if(game.isPlaying){
			game.pause();
		}else{
			game.play();
		}
	});

	window.onblur = ()=>{
		game.pause();
	}

})();
