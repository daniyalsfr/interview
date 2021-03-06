import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueOffline from 'vue-offline'

Vue.use(VueOffline)
Vue.config.productionTip = false

Vue.use(VueToast,{
  position : 'top',
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
