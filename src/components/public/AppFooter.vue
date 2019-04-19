<template>
	<div id="AppFooter">
		<span id="txt1">Copyright @ 2019</span>
		<span id="txt2">Made by Team "<span> Thợ sửa xe </span>"</span>
	</div>
</template>
<style type="text/css">
	#AppFooter{
		background-color: #4280f4;
		height: 6em;
  		width:100vw;
  		position: relative;
  		margin-left: -50vw;
  		left: 50%;
  		margin-bottom: -10px;
	}
	#txt1{
		position: absolute;
		font-size: 20px;
		color: #ecf0f1;
		top: 30%;
		left: 10%;
	}
	#txt2{
		font-size: 18px;
		color: #ecf0f1;
		position: absolute;
		top: 30%;
		right: 10%;
		font-family:  Myriad Pro Semibold Italic;
	}
	#txt2 span{
		color:#E91E63;
		font-family: Lobster;
	}
	@font-face{
		font-family: Myriad Pro Semibold Italic;
        src: url(../../assets/myriad/MYRIADPRO-SEMIBOLDIT.woff);
	}
</style>