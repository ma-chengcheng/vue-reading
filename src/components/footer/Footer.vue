<template>
  <div id="footer">
    <mu-paper class="footer-paper" :zDepth="2">
      <mu-flexbox>
        <mu-flexbox-item class="flex-footer">
          首页
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-footer unactived">
          书库
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-footer unactived">
          联系我们
        </mu-flexbox-item>
      </mu-flexbox>
      <br>
      <mu-flexbox>
        <mu-flexbox-item  class="flex-footer">
        Copyright © 2017 beluaga
        </mu-flexbox-item>
      </mu-flexbox>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'ReadFooter'
}
</script>

<style scoped>
.footer-paper {
  display: inline-block;
  width: 96%;
  padding: 15px;
}

.unactived{
  color: #969ba3
}

#footer{
  margin-top: 50px;
  text-align: center;
}

.flex-footer{
  text-align: center;
}
</style>
