<template>
	<div id="filtre">
		<input class="pokesearch" type="text" placeholder="Search" v-on:keyup.enter="search()" >
		<input type = 'submit' v-on:click="search()">
		<TypeChoice/>
	</div>
</template>

<script>

	import TypeChoice from "@/components/app/TypeChoice"
	import $ from "jquery"

	export default {
		name: 'Filtre',
		components:{
			TypeChoice
		},

		methods:{
			search(){
				var t = document.getElementsByClassName("pokesearch")[0].value;
				var tb = document.getElementById("ListPoke").children ;
				
				for(var i=0; i<tb.length;i++){
					if (t.toUpperCase()!= null && t.toUpperCase() != ""  && tb[i].textContent.toUpperCase().indexOf(t.toUpperCase()) == -1){
						$(tb[i]).hide();
					}
					else $(tb[i]).show(); 
				}
			},
		}
	}
</script>