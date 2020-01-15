<template>
	<div id="app">
		<div v-if="search">
			<h2>List of pokemon :</h2>
			<Filtre/>	
		</div>
	<section v-if="errored"><p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p></section>
		<section v-else>
			<div v-if="loading">Chargement...</div>
			
			<div id="ListPoke" v-if="search">
				<div class="pokemons" v-for="pokemon in listPoke" v-bind:key="pokemon.name" @click="clique(`${pokemon.url}`)">
					<div class="pic" :id="pokemon.name">
						<img src='https://via.placeholder.com/96'>
					</div>
					<p class="name"> {{ pokemon.name }} </p>
				</div>
			</div>

			<div id="InfoPoke" v-if="information">
				<ul class ='cliqued'>
					<img class = 'img_poke' :src="`${dataPoke.sprites.front_default}`"><img class = 'img_poke' :src="`${dataPoke.sprites.back_default}`">
					<li>Id : {{  dataPoke.id }}</li>
					<li>Name : {{ dataPoke.name }}</li>
					<li>Height : {{dataPoke.height}}</li>
					<li>Weight : {{dataPoke.weight}}</li>
					<li>Type :{{dataPoke.types[0].type.name}}</li>
					<li><button v-on:click='displayAll("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")'>Return</button></li>
				</ul>
			</div>

		</section>
	</div>
</template>

<script>

	import Filtre from "@/components/app/Filter"
	import axios from 'axios'
	
	export default {
		name: 'PokedexPage',
		components:{
			Filtre
		},
		data() {
			return {
				listPoke: {},
				dataPoke: {},
				response: null,
				loading: true,
				errored: false,
				information: false,
				search: true
			}			
		},
		methods:{

			pokemonImg (urlParam) {
				axios
				.get(urlParam)
				.then(response => {
					this.response = response.data
					document.getElementById(this.response.name).innerHTML = "<img src='" + this.response.sprites.front_default + "'>";
				})
				.catch(error => {
					window.console.log(error)
				})
			},

			clique (urlParam) {
				axios
				.get(urlParam)
				.then(response => {
					this.dataPoke = response.data
					this.information = true
					this.search = false
					this.listPoke = {}
				})
				.catch(error => {
					window.console.log(error)
				})
			},

			displayAll (urlParam) {
				axios
					.get(urlParam)
					.then(response => {
						this.listPoke = response.data.results
						this.information = false
						this.search = true
						for (var i = 0; i < this.listPoke.length; i++) {
							this.pokemonImg(this.listPoke[i].url);

						}
					})
					.catch(error => {
						window.console.log(error)
						this.errored = true
					})
					.finally(() => this.loading = false);
				},
		},
		
		mounted: function (){
			this.displayAll("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
		}
	}
</script>

<style>
	header{
		width: 100%;
		height: 11vh;
		background-color: #ed2f21;
		font-size: 350%;
		text-align: center;
		padding-top: 3vh;
	}

	body, ul {
		margin: 0;
		padding: 0;
	}

	h2 {
		text-align: center;
		font-family: "fonte pokemon";
		color: #3a6bba;
		margin-top: 0;
		font-size: 5vh;
	}


	html {
		font-family: sans-serif;
	}

	.pokemons {
		display: inline-block;
		padding: 1%;
	}

	.name {
		font-weight: bold;
		text-align: center;
	}

	.cliqued {
		font-size: 6vh;
		text-align: center;
	}

	.img_poke{
		height: 20vh;
	}

	#typeChoice{
		float: right;
		margin-right: 2%;
	}
</style>