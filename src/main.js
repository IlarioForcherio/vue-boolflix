import Vue from 'vue'
import App from './App.vue'
//bootstrap
import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/vue-boolflix/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/vue-boolflix/node_modules/bootstrap/dist/js/bootstrap.min.js'

//country-flag
import CountryFlag from 'vue-country-flag'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStarHalfStroke,faMagnifyingGlass, faStar as faStarSolid, } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular, faBell } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add( faStarHalfStroke,faMagnifyingGlass, faStarRegular, faStarSolid, faBell)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon,)



Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
