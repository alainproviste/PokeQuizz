<template>
	<div id="typeChoice">
		Sort by type :
		<form name="type">
			<select name="ListType" v-on:change="sortType()">
				<option value="">Choose an option</option>
				<option value="normal">Normal</option>
				<option value="fire">Fire</option>
				<option value="grass">Grass</option>
				<option value="water">Water</option>
				<option value="bug">Bug</option>
				<option value="dragon">Dragon</option>
				<option value="ice">Ice</option>
				<option value="fighting">Fighting</option>
				<option value="flying">Flying</option>
				<option value="ghost">Ghost</option>
				<option value="ground">Ground</option>
				<option value="electric">Electric</option>
				<option value="poison">Poison</option>
				<option value="psychic">Psychic</option>
				<option value="rock">Rock</option>
			</select>
		</form>
	</div>
</template>

<script>

	import $ from "jquery"
	import axios from "axios"

	export default {
		name: 'TypeChoice',
		data() {
			return {
				listPoke: {},
				dataPoke: {},
			}			
		},
		methods:{

			getListPoke(urlParam){
				axios
					.get(urlParam)
					.then(response => {
						this.listPoke = response.data.results;
					})
					.catch(error => {
						window.console.log(error)
					})
			},

			async infoPoke(urlParam){
				await axios
				.get(urlParam)
				.then(response => {
					this.dataPoke = response.data;
				})
				.catch(error => {
					window.console.log(error)
				})
			},

			async sortType(){
				var i = document.type.ListType.selectedIndex;
				var type = document.type.ListType.options[i].value;
				var tb = document.getElementById("ListPoke").children ;

				for(var y=0; y<this.listPoke.length;y++){
					await this.infoPoke(this.listPoke[y].url);
					if (this.dataPoke.types[0].type.name == type || this.dataPoke.types[1] != null && this.dataPoke.types[1].type.name == type || type == ""){
						$(tb[y]).show();
					}
					else $(tb[y]).hide(); 
				}
			}
		},
		mounted: function (){
			this.getListPoke("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
		}
	}
</script>