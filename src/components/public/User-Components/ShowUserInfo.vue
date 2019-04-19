<template>
  <div class="info-context" :style="{height:info_context_height}">
    <div class="profile-title">
      <h1>PROFILE</h1>
    </div>
    <div class="user-info">
      <div class="avatarZone">
        <avatar image="https://nguoinoitieng.tv/images/nnt/98/0/bc39.jpg" size="96"></avatar>
        <h5 id="id-user">ID:{{user_data.id}}</h5>
      </div>
    </div>
    <div class="exchange-content">
      
    </div>
    <div class="provider-info-content" v-show="isProvider">
      
    </div>
  </div>
  
</template>
<script>
import Avatar from 'vue-avatar-component'
export default {
  name: 'ShowUserInfo',
  data(){
  	return{
      user_data:{
        id:123456,
        Ho:'Nguyen',
        Ten:'Viet Phi',
        Tuoi:22,
        isProvider: false,
      },

  	};
  },
  computed:{
  	info_context_height:function()
    {
      if(this.user_data.isProvider)
      {
        return '100em';
      } 
      return '60em';
    },
    isProvider()
    {
      return this.user_data.isProvider;
    }
  },
  components:{
  Avatar
  },
  methods:{
  	
  },
  created:function()
  {
    
  }
 };
</script>
<style>
  .profile-title{
    display: inline-block;
    width: 100%;
    color: blue;
    text-align: center;
  }
  .info-context
  {
    height: 60em;
    max-height: 100em;
    display: flex;
    width: 100%;
  }
  .user-info
  {
    position: absolute;
    font-size: 16px;
    width: 30%;
    height: 30em;
    background-color: #a55eea;
    border-radius: 8px;
    top: 15%;
    left: 5%;

  }
  .user-info .avatarZone
  {
    align-items: center;
    text-align: center;
    height: 25%;
    background-image: url('../../../assets/profileBG.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 6px;
  }
  #id-user{
    position: relative;
    margin-top: 2px; 
  }

  .exchange-content{
    width: 60%;
    height: 40em;
    background-color: #a55eea;
    position: absolute;
    right: 3%;
    top: 15%;
  }
  .provider-info-content
  {
    height: 40em;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0%;
  }
</style>