import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueResource from 'vue-resource'

Vue.use(Vuelidate);
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
