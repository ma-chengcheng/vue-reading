import {
  getUserInfo,
  searchBook,
  setUserDescribe,
  getBookInfo,
  getIndexBook,
  getRankBook
} from '../service/getData'

import {
  GET_USERPROFILE,
  GET_SEARCH_RESULT,
  SET_USER_DESCRIBE,
  GET_BOOK_INFO,
  GET_INDEX_BOOK,
  GET_RANK_BOOK
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
  },

  async setUserDescribeAction({
      commit
  }, new_user_describe){
      console.log(new_user_describe);
      await setUserDescribe(new_user_describe).then(res => {
          commit(GET_USERPROFILE, new_user_describe);
      })
  },

  async getBookInfoAction({
      commit,
      state
  }, book_id){
      getBookInfo(book_id).then(res => {
          commit(GET_BOOK_INFO, res.data)
      })
  },

  async getIndexBookAction({
      commit,
      state
  }){
      await getIndexBook().then(res => {
          commit(GET_INDEX_BOOK, res.data)
      })
  },

  async getRankBookAction({
      commit,
      state
  }){
      await getRankBook().then(res => {
          commit(GET_RANK_BOOK, res.data)
      })
  }
}
