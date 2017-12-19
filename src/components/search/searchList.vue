<template>
    <div class="search-list">
        <mu-list>
             <mu-list-item　v-for="bookItem in bookList" to="/book/">
                <book-item :book="bookItem"></book-item>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
    import bookItem from '@/components/common/bookItem'
    export default{
        components: {
            bookItem,
        },
        data(){
            return {
                bookList: []
            }
        },
        created(){
            this.initData();
        },
        methods: {
            initData(){
                this.getBookList()
            },
            getBookList () {
              let bookList;
              axios.get('/api/LibraryBookViewAPI/', {
              params: {
                numPage: this.numPage
                }
              })
              .then(res => {
                  if (res.status === 200) {
                      bookList = res.data.book_items;
                      for (let i in bookList) {
                          this.bookList.push(bookList[i])
                      }
                  }
                }
              )
            },
        }
    }
</script>

<style>
.search-list{
    padding-top: 38px;
}
</style>
