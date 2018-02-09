import {config} from './config'

/**
* 帐号密码登录
**/
export const accountLogin = (phone, password) => axios.post('/api/UserLoginAPIView/',{
              phone,
              password
          }, config)

/** 获取用户信息 **/
export const getUserInfo = () => axios.get('/api/UserProfileAPIView/')

/**
* 登出
**/
export const signout = () => axios.get('/api/UserLogoutAPIView/')

/**
* 设置用户简介
**/
export const setUserDescribe = (new_user_describe) => axios.post('/api/SetUserDescribeAPIView/', {
    new_user_describe
}, config)

/**
* 追书请求
**/
export const chaseBookRequest = (book_id) => axios.get('/api/ChaseBookAPIView/', {
    params: {
        book_id
    }
})

/**
* 订阅请求
**/
export const subscribeBookRequest = (book_id) => axios.get('/api/SubscribeBookAPIView/', {
    params: {
        book_id
    }
})
