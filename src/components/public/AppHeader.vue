<template>
	<div id="AppHeader">
		<img src="../../assets/fix-car-icon.png">
    <span id="sologan">Fix car service</span>
    <div id="hello-admin">
      <span>Hello, Admin!!</span>
      <button id="logout-btn" @click="Logout"></button>
    </div>
		
	</div>
</template>
<style>
  #AppHeader {
  	font-size: 10px;
  	background-color: #4280f4;
  	height: 8em;
  	width:100vw;
  	position: relative;
  	margin-left: -50vw;
  	left: 50%;
  	margin-top: -1em;
    display: flex;
  }
  #AppHeader img{
  	position: absolute;
    top: 25%;
    left: 5%;
  }
  #AppHeader #sologan{
    position: absolute;
    top: 30%;
    left: 10%;
    font-size: 30px;
    font-family: Lobster;
    color: white;
  }
  #hello-admin{
    position: absolute;
    top: 50%;
    left: 85%;
    transition: 3s;
    transform: translate(-50%,-50%);
    width: 180px;
  }
  #hello-admin span{
    font-size: 20px;
    color: white;
    background:none;
    font-family: Lobster;
    float: left;
  }
  #hello-admin:hover > #logout-btn{
    background-image: url('../../assets/logoutbtn.png');
    margin-left: 5px;
    transition: 1s;
    transform:translateX(50%);
  }
  #logout-btn
  {
    background-image:none;
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
    background-color: #4280f4;
    border: none;
    display: flex;
    justify-content: center;
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