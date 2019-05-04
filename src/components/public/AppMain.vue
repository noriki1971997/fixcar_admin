<template>
	<div id="AppMain">
		<Menu>
			<div>
				<div class="item-zone" @click="goto('Home')">
					<a class="item">
					<i class="fas fa-home fa-2x"></i>
					<span>Home</span>
				</a>
				</div>
				<div class="item-zone" @click="goto('UserList')">
					<a class="item">
					<i class="fas fa-clipboard-list fa-2x"></i>
					<span>Danh sách người dùng</span>
				</a>
				</div>
			</div>
		</Menu>
		<div class="wrap-content">
        	<i :class="$mq" class="fas fa-bars fa-2x btn-openMenu" @click="openMenu"></i>
      		<component v-bind:is="nameOfComponent"></component>
		</div>
	</div>
</template>
<style type="text/css">
	#AppMain{
		font-size: 16px;
		background-size: contain;
		height: auto;
  		width:100vw;
  		margin-left: -50vw;
  		left: 50%;
  		display: flex;
  		overflow: hidden;
  		position: relative;
  		margin-bottom: -10px;
	}
	.item-zone:hover{
		background-color: #9C27B0;
	}
	.item{
		margin-left: 1.5em;
		transform: translate(0,-50%);	

	}
	.item-zone{
		overflow: hidden;
		height: 4em;
	}
	.item i{
		width: 2em;
		text-align: center;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		color:#FFEB3B;
	}
	.item span{
		font-family: Myriad Pro Semibold Italic;
		color: #FFEB3B;
		align-items: center;
	}
	.wrap-content{
		position: relative;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		height:auto;
		display: inline-grid;
		min-height: 30em;
	}

	.btn-openMenu{
	    position: absolute;	    
	    color: white;	    
  	}

  	/*responsive*/
  	.btn-openMenu.mobile
  	{
  		font-size: 16px;
  		margin-top: 3em;
  		left: 5%;
  	}
  	.btn-openMenu.tablet
  	{
  		font-size: 22px;
  		margin-top: 3em;
  		left: 5%;
  	}
  	.btn-openMenu.desktop
  	{
  		margin-top: 4em;
  		font-size: 32px;
  		left: 5%;
  	}
</style>
<script>
import Menu from './Menu.vue'
import Home from './Home.vue'
import UserList from './UserList.vue'
export default {
  name: 'AppMain',
  data(){
  	return{
  		nameOfComponent:"Home"
  	};
  },
  computed:{
  	
  },
  components:{
  	Menu,Home,UserList
  },
  methods:{
  	//mo thanh menu
  	openMenu:function(){
  		this.$store.dispatch('dashBoard/openMenu');
  	},
  	goto:function(page)
  	{	
  			if(sessionStorage.getItem('currentPage') == page)
  			{
  				this.$router.go();
          this.$store.dispatch('dashBoard/closeMenu');
  			}
  			else
  			{
  				this.nameOfComponent = page;
  				sessionStorage.setItem('currentPage',this.nameOfComponent);
  				console.log(sessionStorage.getItem('currentPage'));
          this.$store.dispatch('dashBoard/closeMenu');
  			}
  		
  	}
  },
  created:function()
  {
  	this.nameOfComponent = sessionStorage.getItem('currentPage') || 'Home';
  	console.log(this.nameOfComponent);
  }
 };
</script>
