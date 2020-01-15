<template>
	<div id="accueil">
		<div id="quiz">
			<router-link to="/quizz">
				<p><img src="@/assets/images/quizz.png" style="height: 7vh;"></p>
			</router-link>
		</div>
		<div id="pokedex">
			<router-link to="/pokedex">
				<p><img src="@/assets/images/pokedex.png" style="height: 7vh;"></p>
			</router-link>
		</div>
		<footer></footer>
	</div>
</template>

<script>
	
	export default {
		name: 'HomePage'
	}
</script>

<style>
	#accueil{
		height: 75vh;
		display: grid;
		grid-template-columns: 50% 50%;
	}

	#accueil div {
		display: grid;
	}

	#accueil div a{
		padding-left: 40%;
	}


	#quiz {
		width: 100%;
		background-image: url(../../assets/images/pika.png);
		background-size: cover;
		border-right: 2px solid black;
		z-index: 1;
	}

	#pokedex {
		background-image: url(../../assets/images/pokedex-icon.png);
		background-size: cover;
	}
	footer {
		background-color: #ed2f21;
		height: 11vh;
		bottom: 0;
		right: 0;
		left: 0;
		position: absolute;
	}
</style>