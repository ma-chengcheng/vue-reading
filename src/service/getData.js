import Cookies from 'js-cookie'

let config = {
  headers: {'X-CSRFtoken': Cookies.get('csrftoken')}
}
/**
* 帐号密码登录
**/
export const accountLogin = (phone, password) => axios.post('/api/UserLoginAPIView/',{
              phone,
              password
          }, config)

export const getUserInfo = () => axios.get('/api/UserProfileAPIView/')

export const signout = () => axios.get('/api/UserLogoutAPIView/')

export const searchBook = (key_value) => axios.get('/api/SearchBookAPIView/',{
    params: {
    key_value
    }
})


export const setUserDescribe = (new_user_describe) => axios.post('/api/SetUserDescribeAPIView/', {
    new_user_describe
}, config)


export const getBookInfo = (book_id) => axios.get('/api/BookInfoAPIView/', {
    params: {
        book_id
    }
})
