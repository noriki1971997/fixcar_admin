<template>
    <div class="form-submit-container">
        <form @submit.prevent="handleSubmit" class="form-content">
            <div class="form-group" >
                <label class="lb-title-form-group">ĐỔI MẬT KHẨU</label>
            </div>

            <div class="form-group" >
                <label class="lb-form-group">Mật khẩu mới</label>
                <input :class="{'is-danger': errors.has('password')}" v-validate="'required'" name="password" type="password" v-model="password.new" class="input-forgotpass" ref="password" />
            </div>
            <div class="form-group" >
                <label v-show="errors.has('password')" class="lb-form-group msgNotify">{{ errors.first('password') }}</label>
            </div>
            <div class="form-group" >
                <label class="lb-form-group">Xác nhận mật khẩu</label>
                <input :class="{'is-danger': errors.has('password_confirmation')}" v-validate="'required|confirmed:password'" name="password_confirmation" type="password" v-model="password.confirm" class="input-forgotpass"/>
            </div>
             <div class="form-group" >
                <label v-show="errors.has('password_confirmation')" class="lb-form-group msgNotify">{{ errors.first('password_confirmation') }}</label>
            </div>
            <div class="form-group-btn" >
                <button class="btn-primary">Gữi</button>
            </div>
        </form>
        <div class="result-zone">
          <label class="result-label">
            {{result}}
          </label>
        </div>
      </div>

  
</template>


<style>
.form-submit-container
{
  background-color: rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5em;
  marker-bottom:auto;
  font-size: 16px;
  width:28em;
  height:28em;
  align-items: center;
}
.form-content
{
  padding-top: 2.5em;
  padding-bottom: 2em;
  position: relative;
  width: 60%;
  height: 60%;
  margin-left: auto;
  margin-right: auto;
}
.form-group
{
  position: relative;
  display: inline-grid;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-top: 1.3em;
  height: 2.5em;
}
.input-forgotpass
{
  width: 100%;
  height: 2em;
  border: 2px solid #55efc4;
  border-radius: 0.3em;
  background-color: #dbebfa;
  padding-left: .5em;
}
.lb-form-group
{
  font-size: 18px;
  color:#f1f1f1 ;
  padding-bottom: 3px;
  font-weight: 500;
}
.lb-title-form-group
{
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color:#f9f8eb;
}
.form-group-btn
{
  width: 100%;
  display: inline-table;
  align-items: center;
  text-align: center;
}
.btn-primary
{

  position: relative;
  margin-top: 1em;
  margin-right: auto;
  margin-left: auto;
  width: 5em;
  height: 2em;
  border: 1px solid #00c4ff;
  background-color: #0389ff;
  border-radius: .3em;
  color:white;
  font-weight: 700;
}
.msgNotify
{
  font-size: 16px;
  color:#F50057;
  width: 100%;
  text-align: left;
}
.result-zone
{
  position: relative;
  font-size: 18px;
  color:white;
  margin-top: 7.5em;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  text-align: center;
  color: #F50057;
}
</style>


<script>
import router from "../router/index.js"
import axios from 'axios'
import store from '../store/index.js'
export default {
  name: 'ForgotPassword',

  data () {
    return {  
      token: '',
      password:{
        old:"",
        new:"",
        confirm:""
      },
      result:''
    }
  },
  created() {
     console.log(this.$route.params.token);
     this.token = this.$route.params.token;
  },
  methods:
  {
   handleSubmit(e) {
      this.result="";
      this.$validator.validate().then(valid => {
        if (valid) {
          axios.post("http://13.67.50.208:3003/api/auth/forgot-pass/",{token:this.token,password: this.password.new,c_password:this.password.confirm})
              .then(resp => {
                console.log(resp);
                this.result = resp.data.message;
              })
              .catch(err => {
                 this.result = "Lỗi không thể đổi mật khẩu";
              })
        }
      });
      
    }
  }
};
</script>
