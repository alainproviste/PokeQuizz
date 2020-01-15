// on importe toutes les librairies que nous utiliserons

import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use($)
Vue.use(moment)

const router = new VueRouter({ routes })

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')