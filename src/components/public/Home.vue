<template>
	<div>
		<div class="backgroundImg"><a id="title-welcome">Welcome to admin page</a></div>
	</div>
</template>
<script>
export default {
  name: 'Home',
  data(){
  	return{

  	};
  },
  computed:{
  	
  },
  components:{
  },
  methods:{
  	
  }
 };
</script>
<style>
  #title-welcome
  {
    background-color: none;
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    font-family: AlexBrush-Regular;
    font-size: 72px;
    margin-top: 3em;
    color: white;
  }
	.backgroundImg{
		background-image: url('../../assets/Theme4.jpg');
		width: 100%;
    height: 60em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    box-sizing: border-box;
	}
  @font-face {
  font-family: "AlexBrush-Regular";
  src: url("../../assets/AlexBrush-Regular.ttf");
}
</style>