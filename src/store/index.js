import Vue from 'vue'
import Vuex from 'vuex'

import actions from '@/store/modules/actions'
import mutations from '@/store/modules/mutations'
import state from '@/store/modules/state'
import getters from '@/store/modules/getters'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state,
    mutations,
    actions,
    getters
})
