<template>
    <div class="form-submit-container">
                      <form @submit.prevent="handleSubmit" class="form-content">
                          <div class="form-group" >
                              <label class="lb-title-form-group">ĐỔI MẬT KHẨU</label>
                          </div>
                          <div class="form-group" >
                              <label class="lb-form-group">Mật khẩu mới</label>
                              <input type="text" v-model="password.new" class="input-forgotpass" />
                          </div>
                          <div class="form-group" >
                              <label class="lb-form-group">Xác nhận mật khẩu</label>
                              <input type="text" v-model="password.confirm" class="input-forgotpass"/>
                          </div>
                          <div class="form-group-btn" >
                              <button class="btn-primary">Gữi</button>
                          </div>
                      </form>
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
  margin-top: 10em;
  marker-bottom:auto;
  font-size: 16px;
  width:25em;
  height:23em;
  align-items: center;
}
.form-content
{
  padding-top: 3em;
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
  padding-top: 2em;
}
.input-forgotpass
{
  width: 100%;
  height: 2em;
  border: 2px solid #41b6e6;
  border-radius: 0.3em;
  background-color: #dbebfa;
  padding-left: .5em;
}
.lb-form-group
{
  color:#f1f1f1 ;
  padding-bottom: 1em;
  font-weight: 500;
}
.lb-title-form-group
{
  text-align: center;
  font-size: 1.5em;
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
  margin-top: 2em;
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
      }
    }
  },
  created() {
     console.log(this.$route.params.token);
     this.token = this.$route.params.token;
  },
  methods:
  {
   handleSubmit(e) {
      console.log("submit");
      console.log(this.password.confirm);
      axios.post("http://13.67.50.208:3003/api/auth/forgot-pass/"+this.token,{token:this.token,password: this.password.new,c_password:this.password.confirm})
              .then(resp => {
                console.log(resp);
              })
              .catch(err => {
                  console.log("get table data fail")
              })
    }
  }
};
</script>
