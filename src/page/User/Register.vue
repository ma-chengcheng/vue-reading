  <template>
  <div>
    <mu-appbar title="注册">
          <mu-icon-button icon="chevron_left" slot="left" @click="goBack"/>
    </mu-appbar>
    <mu-content-block>
      <mu-text-field　v-model="phone" fullWidth label="手机" :errorText="inputPhoneErrorText" @blur="phoneInputError" type="number" labelFloat/>
      <br/>
      <mu-text-field v-model="verifyCode" label="验证码" :errorText="inputVerifyCodeErrorText" @blur="checkVerifyCode"  type="number" labelFloat fullWidth/>
      <mu-flat-button :disabled="!rightPhone" @click="getVerifyCode" label="获取验证码" primary fullWidth　id="r-veri-code-btn" v-show="!computedTime"/>
      <mu-flat-button disabled :label="'已发送'+computedTime+'s'" primary fullWidth　id="r-veri-code-btn" v-show="computedTime"/>
      <br/>
      <mu-text-field v-model="password"　fullWidth label="密码" hintText="请输入密码" :errorText="inputPasswordErrorText"　@blur="passwordInputError" :type="passwordInputType" labelFloat/>
      <mu-flat-button icon="remove_red_eye" primary fullWidth　id="r-veri-code-btn" @click="showPassword"/>
      <br/>
      <br/>
      <mu-raised-button　@click="register" label="注册" fullWidth primary/>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data(){
    return {
      phone: "",
      password: "",
      verifyCode: "",
      inputPhoneErrorText: "",
      inputVerifyCodeErrorText: "",
      inputPasswordErrorText: "密码长度8－16位　可为数字、大小写字母以及下划线",
      rightPhone: false,
      rightVerifyCode: false,
      rightPassowrd: false,
      passwordInputType: "password",
      computedTime: 0,
    }
  },
  computed: {
      //判断手机格式
      checkPhone: function(){
          return /^1\d{10}$/gi.test(this.phone)
      },
      checkPassowrd: function(){
          return /^[A-Za-z0-9_]{8,16}$/.test(this.password)
      }
  },
  methods: {
    // 返回上个页面
    goBack () {
      this.$router.go(-1);
    },
    // 手机输入错误提醒
    phoneInputError(){
      if (this.checkPhone) {
        axios.get('/IsRegisteredAPIView/',{
          params: {
            phone: this.phone
          }
        })
        .then(res => {
            if ('true' == res.data.is_registered) {
              this.inputPhoneErrorText = '该手机号已注册过';
              this.rightPhone = false;
            }else{
              this.inputPhoneErrorText = '该手机可用';
              this.rightPhone = true;
            }
          }
        )
      }else {
        this.inputPhoneErrorText = '手机格式错误';
        this.rightPhone = false;
      }
    },
    //获取短信验证码
    async getVerifyCode(){
        if (this.checkPhone) {
            this.computedTime = 60;
            this.timer = setInterval(() => {
                this.computedTime --;
                if (this.computedTime == 0) {
                    clearInterval(this.timer)
                }
            }, 1000)
            axios.get('/SendMessageAPIView/',{
              params: {
                phone: this.phone
              }
            })
        }
    },
    // 检查验证码
    checkVerifyCode() {
      if (this.computedTime) {
          axios.get('/CheckVerifyCodeAPIView/',{
            params: {
              verifyCode: this.verifyCode
            }
          })
          .then(res => {
            if ('true' == res.data.state) {
              this.rightVerifyCode = true;
              this.inputVerifyCodeErrorText = res.data.message;
            }else{
              this.inputVerifyCodeErrorText = res.data.message;
            }
          }
        )
      }
    },
    // 密码输入错误提醒
    passwordInputError() {
      if(this.checkPassowrd){
        this.rightPassowrd = true;
        this.inputPasswordErrorText = '';
      }else {
        this.inputPasswordErrorText = '密码格式错误';
      }
    },
    // 显示密码
    showPassword () {
      this.passwordInputType = this.passwordInputType == 'password' ? 'text' : 'password';
    },
    //
    register() {
      if (this.rightPhone && this.rightVerifyCode && this.rightPassowrd) {
          axios.get('/UserRegisterAPIView/',{
            params: {
              phone: this.phone,
              password: this.password
            }
          })
          .then(res => {
            if ('true' == res.data.state) {
              console.log("注册成功");
              this.$router.push('/')
            }else{
            }
          }
        )
      }
    }
  }
}
</script>

<style scoped>

#r-veri-code-btn{
  float: right;
  margin-top: -3.7em;
}
</style>
