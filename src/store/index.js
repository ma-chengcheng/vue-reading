import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  user_is_active: false,
  user_profile: {
    user_name: '',
    phone: '',
    user_describe: '',
    avatar: null,
    recommend_ticket_num: 0,
    diamond_ticket_num: 0,
    balance: 0,
    chase_book: {},
    subscribe_book: {}
  },

  book:{
    index: {},
    rank: {},
    book_info: {
        author: '',
        book_name: '',
        cover: '',
        describe: '',
        type: '',
        update_state: '',
        book_comment: ''
    }
  },
  searchBook: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
