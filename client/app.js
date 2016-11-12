import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueMdl from 'vue-mdl'

import 'material-design-lite'
import 'shared/scss/styles.scss'

Vue.use(VueMdl)
sync(store, router)
Vue.config.devtools = true
const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
