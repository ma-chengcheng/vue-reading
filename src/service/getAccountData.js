import config from './config'

/**
* 帐号密码登录
**/
export const accountLogin = (phone, password) => axios.post('/api/UserLoginAPIView/',{
              phone,
              password
          }, config)

/**
* 获取用户信息
**/
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
