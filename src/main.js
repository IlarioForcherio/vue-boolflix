import Vue from 'vue'
import App from './App.vue'
//bootstrap
import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/vue-boolflix/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/vue-boolflix/node_modules/bootstrap/dist/js/bootstrap.min.js'
//country-flag
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
