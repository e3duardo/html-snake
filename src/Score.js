class SnakeBlock {
	constructor(game) {
		this.game = game;
		this.points = 0;
		this.deaths = 0;
		this.bestScore = 0;
		if(localStorage.getItem('bestScore')>0){
			this.bestScore = localStorage.getItem('bestScore');
		}
	}

	tick = ()=>{
		if(this.game.isPlaying){
			this.points+=this.game.food.value;

			if (this.points > this.bestScore){
				this.bestScore = this.points;
				localStorage.setItem('bestScore', this.points);
			}
		}
	}

	tickDeath = ()=>{
		if(this.game.isPlaying){
			this.points = 0;
			this.deaths++;
		}
	}

	update = ()=>{
		document.getElementById('ScorePoints').innerHTML = this.points;
		document.getElementById('ScoreDeaths').innerHTML = this.deaths;
		document.getElementById('ScoreBestScore').innerHTML = this.bestScore;
	}

}

export {SnakeBlock as default};
