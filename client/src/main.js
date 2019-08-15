import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueGoogleCharts from 'vue-google-charts'

//Vuetify code
Vue.use(Vuetify)
//Google charts
Vue.use(VueGoogleCharts)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
