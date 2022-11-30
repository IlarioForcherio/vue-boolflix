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
import { faUserSecret,faStarHalfStroke,faMagnifyingGlass,faStar } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faStarHalfStroke,faMagnifyingGlass,)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon,faStar)

{/* <font-awesome-icon icon="fa-solid fa-star" />
<font-awesome-icon icon="fa-regular fa-star" /> */}

Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
