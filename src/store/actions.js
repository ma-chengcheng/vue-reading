import {
  getUserInfo,
  searchBook
} from '../service/getData'

import {
  GET_USERPROFILE,
  GET_SEARCH_RESULT
} from './mutation-types.js'

export default {
  async getUserPrpfile({
    commit,
    state
  }) {
      if (!state.user_is_active) {
          await getUserInfo().then(res => {
              commit(GET_USERPROFILE, res.data);
          })
      }else {
          return
      }
  },

  async searchBookAction({
      commit
  }, key_value){
      if (key_value != null) {
          await searchBook(key_value).then(res => {
              commit(GET_SEARCH_RESULT, res.data);
          })
      }else {
          commit(GET_SEARCH_RESULT, null);          
      }
  }
}
