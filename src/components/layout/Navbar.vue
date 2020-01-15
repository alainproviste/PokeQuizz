<template>
	<!-- Cet header nous permettra de naviguer entre les différentes pages du site. -->
	<header>
		<router-link to="/pokedex"><img src="@/assets/images/pokedex.png" style="height: 7vh;"></router-link>
		<router-link to="/"><img src="@/assets/images/logo_pokequizz.png" style="height: 9vh;"></router-link>
		<router-link to="/quizz"><img src="@/assets/images/quizz.png" style="height: 7vh;"></router-link>
	</header>
</template>

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

html {
  font-family: sans-serif;
}

</style>