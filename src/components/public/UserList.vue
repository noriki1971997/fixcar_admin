<template>
	<div class="background_cover" :class="$mq">
         <router-view></router-view>
         <img src="../../assets/tree.jpg">
	</div>
</template>
<script>
export default {
  name: 'UserList',
  data(){
  	return{

  	};
  },
  computed:{
  	
  },
  components:{
  
  },
  methods:{
  	
  },
  created:function()
  {
    sessionStorage.setItem('currentPage','UserList');
    this.$router.push({name:'DashBoard-UserList-ShowUserList'});
  },
  beforeDestroy()
  {
    console.log("user list");

  }
 };
</script>

<style>
.background_cover {
    min-width: 100%;
    width: 100%;
    background-image: url(../../assets/tree.jpg);
    background-attachment: scroll;
    background-size: cover;
    background-repeat: repeat;
  }
  .background_cover.mobile
  {
    height: 50em;
  }
  .background_cover.tablet
  {
    height: 50em;
  }
  .background_cover.desktop
  {
    height: 60em;
  }



  .background_cover img {
    visibility: hidden;
    width: 100%;
    height: auto;
  }
</style>