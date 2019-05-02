<template>
  <div id="login" :class="$mq">

    <h1 :class="$mq" class="title-login">LOGIN</h1>
    <input type="text" placeholder="Email" @input="showNoticeUsName" :class="$mq">
    <i :style={visibility:visibilityUN}>{{msgErrorUserName}}</i>
    <input :class="$mq" type="password" placeholder="Password" @input="showNoticePssword">
    <i :style={visibility:visibilityPW}>{{msgErrorPassword}}</i>
    <button :class="$mq" @click="goToDashBoard">OK</button>

  </div>
  
</template>


<style>
/*Login page-------------------------------------------------*/
  #login{
    background-color: #031E27;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    border-radius: 2em;  
    font-size: 16px;
  }
  #login.mobile
  {
    width: 16em;
    height: 16em;
  }
  #login.desktop
  {
    width: 25em;
    height: 25em;
  }
  #login.tablet
  {
    width: 20em;
    height: 20em;
  }
  /*title login----------------------------------------------*/
  .title-login{
    color: white;
    font-weight: 500;
    font-family: Amazone BT;
    }
  .title-login.mobile
  {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    font-size: 1.4em;
  }
  .title-login.tablet
  {
    margin-top: 1em;
    margin-bottom: 1.2em;
    font-size: 2em;
  }
  .title-login.desktop
  {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    font-size: 2.4em;
  }
 /*----------------------------------------------------------*/

  /*Input text-----------------------------------------------*/
  #login input[type="text"],div input[type="password"]{
    background: none;
    border: 2px solid #25CFC7;
    display: block;
    text-align: center;   
    outline: none;
    color: white;  
    transition: 0.25s
  }
  /*responsive*/
  #login input[type="text"].desktop,div input[type="password"].desktop
  {
    margin: 0.2em auto;
    padding: 1em 3em;
    width: 14em;
    border-radius: 2em;
  }
  #login input[type="text"].tablet,div input[type="password"].tablet
  {
    margin: 0.05em auto;
    padding: 0.8em 2.5em;
    width: 12.5em;
    border-radius: 2em;
  }
  #login input[type="text"].mobile,div input[type="password"].mobile
  {
    margin: 0.05em auto;
    padding: 0.5em 1.8em;
    width: 10em;
    border-radius: 2em;
  }

  /*responsive*/
  #login input[type="text"]:focus,div input[type="password"]:focus{
    width: 17.5em;
    border-color: #EEDC0B;
  }
  #login input[type="text"].mobile:focus,div input[type="password"].mobile:focus{
    width: 12em;
    border-color: #EEDC0B;
  }
  /*----------------------------------------------------------*/
  /*Button login----------------------------------------------*/
  #login button{
    background: none;
    border: 2px solid #25CFC7;
    display: block;
    text-align: center;   
    outline: none;
    color: white;   
    transition: 0.25s;
    cursor: pointer;
  }

  /*responsive*/
   #login button.desktop
   {
    margin: 0.8em auto;
    padding: 0.8em 2em;
    border-radius: 24px;
   }
   #login button.tablet
   {
    margin: 0.8em auto;
    padding: 0.8em 2em;
    border-radius: 24px;
   } 
   #login button.mobile
   {
    margin: 0.8em auto;
    padding: 0.5em 1.5em;
    border-radius: 24px;
   } 
  #login button:hover{
    background: #168CC6; 
  }
  /*----------------------------------------------------------*/
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
          .catch(err => console.log(err));
       
      }
  }
}
</script>
