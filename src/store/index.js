import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from './modules/auth'
import dashBoard from './modules/dashBoard'
import user from './modules/user'
// ...

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        auth,
        dashBoard,
        user
    }
})