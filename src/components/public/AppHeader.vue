<template>
	<div id="AppHeader" :class="$mq">
		<img src="../../assets/fix-car-icon.png">

    <mq-layout mq="desktop">
      <span id="sologan">Fix car service</span>
    </mq-layout>

    <div id="hello-admin" :class="$mq">
      <span>Hello, Admin!!</span>
      <button id="logout-btn" @click="Logout" :class="$mq"></button>
    </div>
		
	</div>
</template>
<style>
  #AppHeader {
  	font-size: 16px;
    background-color: #020201;	
  	width:100vw;
  	position: relative;
  	margin-left: -50vw;
  	left: 50%;
  	margin-top: -1em;
    display: flex;
  }
  #AppHeader.mobile
   {
    height: 4em;
   }
  #AppHeader.tablet
   {
    height: 4em;
   }
  #AppHeader.desktop
   {
    font-size: 1.5em;
    height: 4em;
   }




  #AppHeader img{
  	position: absolute;
    top: 35%;
    left: 5%;
  }
  #AppHeader #sologan{
    position: absolute;
    top: 35%;
    left: 10%;
    font-size: 30px;
    font-family: Lobster;
    color: white;
  }


  /*Text and logout button----------------------------------------------------*/
  #hello-admin{
    position: absolute;    
    transition: 3s;
    transform: translate(-50%,-50%);  
  }
  #hello-admin.desktop
  {
    top: 60%;
    left: 85%;
    width: 12em;
  }
  #hello-admin.tablet
  {
    top: 60%;
    left: 80%;
    width: 12em;
  }
  #hello-admin.mobile
  {
    top: 60%;
    left: 80%;
    width: 10em;
  }


  #hello-admin span{
    color: white;
    background:none;
    float: left;
    font-weight: 700;
  }
  #hello-admin:hover > #logout-btn{
    background-image: url('../../assets/logoutbtn.png');
    margin-left: 5px;
    transition: 1s;
    transform:translateX(50%);
  }
  /*logout button----------------------------------------------*/
  #logout-btn
  {
    background-image:none;
    background-color: #020201; 
    border: none;
    display: flex;
    justify-content: center;
  }
  #logout-btn.desktop
  {
    background-size: 2.2em 2.2em;
    width: 2.2em;
    height: 2.2em;
  }
  #logout-btn.tablet
  {
    background-size: 1.6em 1.6em;
    width: 1.6em;
    height: 1.6em;
  }
  #logout-btn.mobile
  {
    background-size: 1.4em 1.4em;
    width: 1.4em;
    height: 1.4em;
  }




  @font-face{
    font-family: Lobster;
    src: url(../../assets/Lobster/Lobster_1.3.otf);
  }
</style>
<script>
export default {
  name: 'AppHeader',
  data()
  {
    return{

    }
  },
  methods:{
    Logout:function()
    {
        this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>