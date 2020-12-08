// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Toasted from 'vue-toasted';
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

const toastConfig = { 
  theme: "toasted-primary", 
  position: "top-right", 
  duration : 5000
};

Vue.use(Toasted, toastConfig);