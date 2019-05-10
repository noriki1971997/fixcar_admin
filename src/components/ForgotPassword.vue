<template>
  <div>
    <div class="form-submit-container">
                      <form @submit.prevent="handleSubmit" class="form-content">
                          <div class="form-group">
                              <label>Mật khẩu cũ</label>
                              <input type="text"  v-model="password.old" class="input-forgotpass"/>
                          </div>
                          <div class="form-group" >
                              <label>Mật khẩu mới</label>
                              <input type="text" v-model="password.new" class="input-forgotpass" />
                          </div>
                          <div class="form-group" >
                              <label>Xác nhận mật khẩu</label>
                              <input type="text" v-model="password.confirm" class="input-forgotpass"/>
                          </div>
                          <div>
                              <button class="btn btn-primary">Gữi</button>
                          </div>
                      </form>
      </div>
  </div>
  
</template>


<style>
.form-submit-container
{
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10em;
  marker-bottom:auto;
  font-size: 16px;
  width:25em;
  height:25em;
  background-color: white;
  align-items: center;
}
.form-content
{
  padding-top: 1em;
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
                  reject(err)
                  console.log("get table data fail")
              })
    }
  }
};
</script>
