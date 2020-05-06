import Vue from 'vue'
import Vuex from 'vuex'
import example from './module/example'
// import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        example
    }
    // plugins: [ saveInLocal ]
})