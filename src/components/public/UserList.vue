<template>
	<div>
		<transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
    this.$router.push({name:'DashBoard-UserList-ShowUserList'});
  }
 };
</script>

<style>
</style>