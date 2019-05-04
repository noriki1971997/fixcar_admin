// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import VuejsDialog from "vuejs-dialog"
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import { TableComponent, TableColumn} from './vue-table-component';
import VueMq from 'vue-mq'


Vue.component('table-component', TableComponent)
Vue.component('table-column', TableColumn)

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false
Vue.use(router)
Vue.use(store)
Vue.use(VuejsDialog)


//define size of screen
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 1200,
    desktop: Infinity,
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VuejsDialog,
  render: h => h(App)
})
