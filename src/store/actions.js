import {
  getUserInfo
} from '../service/getData'

import {
  GET_USERPROFILE
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
  }
}
