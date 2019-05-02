import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from './modules/auth'
import dashBoard from './modules/dashBoard'
import user from './modules/user'
import user_detail from './modules/user_detail'
// ...

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        auth,
        dashBoard,
        user,
        user_detail
    }
})