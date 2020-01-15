// Ce fichier contient toutes les routes du site

import HomePage from "@/pages/HomePage"
import PokedexPage from "@/pages/PokedexPage"
import QuizzPage from "@/pages/QuizzPage"

export default [
	{ path: '/pokedex', component: PokedexPage },
	{ path: '/', component: HomePage },
	{ path: '/quizz', component: QuizzPage }
]