<template>
	<div class="dashBoard">
		<AppHeader></AppHeader>
		<AppMain></AppMain>
	</div>
</template>
<style>
	.dashBoard{
		font-size: 16px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
<script>
import AppHeader from './public/AppHeader'
import AppFooter from './public/AppFooter'
import AppMain from './public/AppMain'
export default {
  name: 'DashBoard',
  components:{
  	AppHeader,AppFooter,AppMain
  }
}
</script>