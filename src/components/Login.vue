<template>
  <div id="login">

    <h1>LOGIN</h1>
    <input type="text" placeholder="Email" @input="showNoticeUsName">
    <i :style={visibility:visibilityUN}>{{msgErrorUserName}}</i>
    <input type="password" placeholder="Password" @input="showNoticePssword">
    <i :style={visibility:visibilityPW}>{{msgErrorPassword}}</i>
    <button @click="goToDashBoard">OK</button>
  </div>
  
</template>


<style>
  body{
    background-color: #3c6382;
  }
  #login{
    background-color: #031E27;
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    border-radius: 30px;
  }
  #login h1{
    margin-top: 50px;
    margin-bottom: 60px;
    color: white;
    font-weight: 500;
    font-family: Amazone BT;
    }
  #login input[type="text"],div input[type="password"]{
    background: none;
    border: 2px solid #25CFC7;
    display: block;
    text-align: center;
    margin: 5px auto;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s
  }
  #login input[type="text"]:focus,div input[type="password"]:focus{
    width: 280px;
    border-color: #EEDC0B;
  }
  #login button{
    background: none;
    border: 2px solid #25CFC7;
    display: block;
    text-align: center;
    margin: 10px auto;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  #login button:hover{
    background: #168CC6; 
  }
  #login i{
    color: red;
  }
</style>


<script>
import router from "../router/index.js"
import axios from 'axios'
import store from '../store/index.js'
export default {
  name: 'Login',
  data () {
    return {  
      email:'',
      password:'',
      email:'',
      password:'',
      visibilityUN:'hidden',
      visibilityPW:'hidden',
      msgErrorUserName: 'this is msgErrorUserName',
      msgErrorPassword: 'this is msgErrorPassword'
    }
  },
  computed:{
     visibleNotice: function()
     {
      return{
        visibility: this.visibilityUN
      }
     },
  },
  methods:
  {
    showNoticeUsName :function(event)
     {
        this.email = event.target.value;
        if(this.email.length > 50)
        {

           this.msgErrorUserName = "Email không dài quá 50 kí tự";
           this.visibilityUN = 'visible';
        }
        else
        {
           this.visibilityUN = 'hidden';
        }
      },
      showNoticePssword :function(event)
      {
        this.password = event.target.value;
        if(this.password.length > 16 || this.password < 8)
        {

           this.msgErrorPassword = "Độ dài mật khẩu phải chứa từ 8 đến 16 kí tự";
           this.visibilityPW = 'visible';
        }
        else
        {
           this.visibilityPW = 'hidden';
        }
      },
      goToDashBoard:function()
      {
        if(this.email == '')
        {
          this.msgErrorUserName = "Email không được để trống";
          this.visibilityUN = 'visible';   
        }
        if(this.password == '')
        {
          this.msgErrorPassword = "Password không được để trống";
          this.visibilityPW = 'visible';
        }
          let  value = this.email;
          let  password = this.password;
          let data = {
             value: value,
             password: password
          }
          this.$store.dispatch('auth/login',data)
          .then(() => this.$router.push('/dashBoard'))
          .catch(err => console.log(err))
       
      }
  }
}
</script>
