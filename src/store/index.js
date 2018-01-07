
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './modules/actions.js'
import mutations from './modules/mutations.js'
import state from './modules/state.js'
import getters from './modules/getters.js'

Vue.use(Vuex)
// import * as mt from './mutation-type'


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})