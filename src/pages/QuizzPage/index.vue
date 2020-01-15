<template>
	<div id="quizz">
		<h2>Wich pokemon is {{ dataPoke.name }}?</h2>
		<button v-on:click="timer()" id="start">Start</button>
		<div id="title"></div>
		<div id="info">
			<p id="tempsRestant"></p>
			<p id="nbDeClique"></p>
		</div>
		<div id="choix"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

	export default {
		name: 'QuizzPage',
		data() {
			return {
				quizz_rep: null,
				listChoice:{},
				valeur: 0,
				duration:0,
				dataPoke:{}
			}			
		},
		methods:{
			async quizz(){
				const choix = [];
				for (var i = 0; i < 4; i++) {
					await axios
					.get('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151))
					.then(response => {
						this.dataPoke = response.data
					})
					choix.push(this.dataPoke);
				}
				//document.getElementById('quizz').innerHTML = "";
				for (i = 0; i < choix.length; i++) {
					document.getElementById('quizz').insertAdjacentHTML("beforeend", '<button onclick="this.add('+ i +')" id="'+ i +'"><img src="' + choix[i].sprites.front_default + '" class="reponse" ></button>');
				}
				this.quizz_rep = Math.floor(Math.random() * 4);
				await axios
				.get('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151))
				.then(response => {
					this.dataPoke = response.data
				})
				document.getElementById(this.quizz_rep).innerHTML = '<img src="' + this.dataPoke.sprites.front_default + '" class="reponse">'
			},

			timer(){
				this.duration = moment.duration({'seconds': 30});
				var interval = 1;
				var downloadTimer = setInterval(function(){
					this.duration = moment.duration(this.duration.asSeconds() - interval, 'seconds');
					var sec = this.duration.seconds();
					document.getElementById("tempsRestant").innerText = sec + "s left" ;
					sec -=1;
					if (sec < 0) {
						alert("Session ended....");
						clearInterval(downloadTimer);
					}
				}, 1000);
				this.valeur = 0;
			},

			add(number){
				if (number == this.quizz_rep && this.duration > 0) {
					this.valeur ++;
					this.quizz();
				}else {this.valeur --;}
				document.getElementById("nbDeClique").innerText ="Your score : " + this.valeur;
			}

		},
		mounted: function (){
			this.quizz();
		}
	}

</script>

<style>
	#tips {
		padding-top: 0vh;
		margin-left: 30%;
		width: 40%;
		display: grid;
		grid-template-columns: repeat(2, 50%);
		grid-gap: 3vh;
	}

	.reponse {
		width: 75%;
		transform: scale(0.8);
	}

	h2{
		text-align: center;
		font-family: "fonte pokemon";
		color: #3a6bba;
		margin-top: 0;
		font-size: 4vh;
	}

	button{
		background-color: none;
		border-color: black;
	}

	#start{
		color: #3a6bba;
		margin-top: 0;
		font-size: 3vh;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	#choix {
		padding-top: 0vh;
		margin-left: 30%;
		width: 40%;
		display: grid;
		grid-template-columns: repeat(2, 50%);
		grid-gap: 3vh;
	}
	#info {
		display: flex;
		justify-content: space-around;
		font-size: 2vh;
	}
</style>