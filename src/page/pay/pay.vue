<template>
    <div>
        <head-bar head_bar='true' :head_title="head_title"></head-bar>
        <mu-content-block class="content">
            <h3>支付方式</h3>
            <div class="alipay">
                <img src="../../assets/images/icon/alipay.png">
                <p>支付宝</p>
            </div>
            <h3>支付金额</h3>
            <div class="payMoney">
                <mu-flexbox class="flex">
                    <mu-flexbox-item>
                        <button class="payNumber" @click="slectMoney(10)">1元</button>
                    </mu-flexbox-item>
                    <mu-flexbox-item>
                        <button class="payNumber" @click="slectMoney(10)">10元</button>
                    </mu-flexbox-item>
                    <mu-flexbox-item>
                        <button class="payNumber" @click="slectMoney(30)">30元</button>
                    </mu-flexbox-item>
                </mu-flexbox class="flex">
                <mu-flexbox>
                    <mu-flexbox-item>
                        <button class="payNumber" @click="slectMoney(50)">50元</button>
                    </mu-flexbox-item>
                    <mu-flexbox-item>
                        <button class="payNumber" @click="slectMoney(100)">100元</button>
                    </mu-flexbox-item>
                    <mu-flexbox-item>
                        <button class="payNumber" @click="slectMoney(200)">200元</button>
                    </mu-flexbox-item>
                </mu-flexbox>
                <p>温馨提示</p>
                <p>1. 充值阅读权限仅限本书城使用</p>
                <p>2. 猫阅读充值，1元兑换100猫币</p>
                <p>3. 若充值后账户余额长时间无变化，请书城客服联系</p>
            </div>
            <mu-raised-button @click="payMoney" label="提交" class="demo-raised-button" fullWidth secondary/>
        </mu-content-block>
    </div>
</template>

<script>
import headBar from '@/components/header/headBar'

export default {
  name: 'Home',
  components: {
      headBar,
  },
  data(){
    return{
        head_title: '充值',

        userId: '1505120206',
        money: 0,
    }
  },
  methods: {
    slectMoney(val) {
      //绑定选择金额
      this.money = val
    },
    payMoney () {
        axios.get('/api/PayAPIView/', {
        params: {
          money: this.money
          }
        })
        .then(res => {
            if (res.status === 200) {
                window.location.href = res.data.request_url;
            }
          }
        )
    }
  }
}
</script>

<style  lang="scss" scoped>
.content{
    margin-top: 50px;
}

.info{
  margin-top: 16px;
  text-align: left;
  font-size: 16px;
}
.infoContant{
  padding-left: 2em;
}

.prompt{
  text-align: left;
  font-size: 16px;
  padding-left: 16px;
  line-height: 38px;
  height: 38px;
  width: 100%;
  background-color: #DDD;
}

.alipay{
    text-align: center;
    padding-bottom: 24px;
    border: 1px solid #ddd;
    border-radius: 10px;
    img{
        margin-top: 24px;
        width: 50px;
    }
}



.payMoney{
    padding-bottom: 30px;
    .flex{
        margin-bottom: 20px;
    }
    p{
        font-size: .8rem;
        color: #999;
    }
}


.payNumber{
    width: 100%;
    background-color: #fff;
    border: 1px solid #d7c16b;
}

</style>
