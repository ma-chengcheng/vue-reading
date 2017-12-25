import {
  RECORD_USERINFO,
  GET_USERPROFILE,
  OUT_LOGIN,
  GET_SEARCH_RESULT
} from './mutation-types.js'

export default {
  [RECORD_USERINFO](state, user_profile) {
    state.user_profile = user_profile;
    state.user_is_active = true;
  },
  [GET_USERPROFILE](state, data){
      state.user_profile = data.user_profile;
      state.user_is_active = data.user_is_active;
  },
  [OUT_LOGIN](state){
      state.user_is_active = false;
  },
  [GET_SEARCH_RESULT](state, data){
      state.searchBook = data.book_items;
  }
}
