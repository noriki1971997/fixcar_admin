<template>
	<div>
		<div :style="{width: menuWidth+'em'}" class="AppMenu">
			<div>
				<i class="fas fa-times fa-2x btn-close" @click="closeMenu"></i>
			</div>
			<nav class="MenuNav-itemlist">
				<slot></slot>
			</nav>
	    </div>
	</div>
	
</template>
<style type="text/css">
	.AppMenu{
		   height: 100%; /* 100% Full-height */
	     width: 18em; /* 0 width - change this with JavaScript */
	     position: fixed; /* Stay in place */
	     z-index: 1000; /* Stay on top */
	     top: 0;
	     left: 0;
	     overflow-x: hidden;
	     background-color: black;
	     padding-top: 5em; /* Place content 60px from the top */
	     transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
	}
	.MenuNav-itemlist{
       overflow-x: hidden;
	}
	.btn-close{
  		position: absolute;
  		top: 2%;
  		right: 5%;
  		color: #dcdde1;
	}
	

</style>
<script>
export default {
  name: 'AppMenu',
  data() {
        return {
          isSideBarOpen: false
        };
      },
	 props: {
        isOpen: {
          type: Boolean,
          required: false
        },
         width: {
          type: [String],
          required: false,
          default: '18'
        },
         burgerIcon: {
          type: Boolean,
          required: false,
          default: true
        },
        crossIcon: {
          type: Boolean,
          required: false,
          default: true
        },
        disableOutsideClick: {
          type: Boolean,
          required: false,
          default: false
        }
     },
     computed:{
      menuWidth :function(){return this.$store.getters['dashBoard/menuWidth']} 
     },
     methods:{
     	closeMenu:function()
     	{
     		this.$store.dispatch('dashBoard/closeMenu');
     	}
     }
}
</script>