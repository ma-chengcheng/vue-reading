import config from './config'


/**
* 获取首页书籍
**/
export const getIndexBook = () => axios.get('/api/IndexBookAPIView')

/**
* 获取排行数据
**/
export const getRankBook = () => axios.get('/api/RankBookAPIView')

/**
* 获取书籍详情
**/
export const getBookInfo = (book_id) => axios.get('/api/BookInfoAPIView/', {
    params: {
        book_id
    }
})

/**
* 搜索书籍
**/
export const searchBook = (key_value) => axios.get('/api/SearchBookAPIView/',{
    params: {
    key_value
    }
})
