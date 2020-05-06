import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import { Button, Cell } from 'vant'
import 'vant/lib/index.css'

if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.config.productionTip = false
Vue.use(Button).use(Cell)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')