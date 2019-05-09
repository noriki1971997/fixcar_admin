<template>
	<div :showList="showList" class="service-body" :services="services" :class="$mq">
		<transition name="fade-flipper">
      <div class="slide-service-list" v-show="showList" :class="$mq">
       <h3 class="title-provider-service" :class="$mq">Dịch vụ</h3>
       <swiper :options="swiperOption" class="swiper-wrap-service" :class="$mq">

          <swiper-slide class="slide" v-for="(service,index) in services" :key="index" :class="$mq">

            <div class="service-list-detail" :class="$mq">

              <div class="service-info-line" :class="$mq">
                <a class="title-row-ser">Tên dịch vụ:</a>
                <a class="service-info-content padding-title">{{service.name}}</a>
              </div>

              <div class="service-info-line" :class="$mq">
                <a class="title-row-ser">Giá sàn:</a>
                <a class="service-info-content padding-title" >{{service.minvalue}}</a>
              </div>

              <div class="service-info-line" :class="$mq">
                <a class="title-row-ser">Giá trần:</a>
                <a class="service-info-content padding-title" >{{service.maxvalue}}</a>
              </div>

              <div class="service-info-line  large-area" :class="$mq">
                <a class="title-row-ser">Mô tả:</a>
                <a class="service-info-content">{{service.desc}}</a>
              </div>

              <div class="service-info-line large-area" :class="$mq">
                <a class="title-row-ser">Chú ý:</a>
                <a class="service-info-content">{{service.note}}</a>
              </div>  

            </div>
          </swiper-slide>         
        <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>   
      </div>
    </transition>
	</div>
</template>
<script>
//swiper------------------------------------------------
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';


export default {
  name: 'ListService',
  props:{
    showList: {
      type: Boolean,
      default: false
    },
    services:
    {
      type: Array,
      default: []
    }
  },
  data(){
  	return{
      swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
      },
  	};
  },
  computed:{
  	
  },
  components:{
    swiper,swiperSlide
  },
  methods:{
  	
  }
 };
</script>
<style>
.service-body
{
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0); 
}
.service-body.desktop
{
  width: 40em;
}
.service-body.tablet
{
  width: 60%;
}
.service-body.mobile
{
  width: 60%;
}




.title-provider-service
{
  text-align: center;
  font-family: Mesothelioma-Regular;
  color: white;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: rgba(1, 225, 117, 0.3);
  background: rgba(1, 225, 117, 0.3);
  color: rgba(1, 225, 117, 0.3);
  color: white;
  border-radius: 8px;
}
.title-provider-service.desktop
{
  font-size: 1.6em;
}
.title-provider-service.tablet
{
  font-size: 1em;
}
.title-provider-service.mobile
{
  font-size: 0.4em;
}
.slide-service-list
{
  background-color: rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  color: white;
}

.swiper-wrap-service.desktop
{
  width: 40em;
  height: 28em;
}
.swiper-wrap-service.tablet
{
  width: 100%;
  height: 28em;
  font-size: 12px;
}
.swiper-wrap-service.mobile
{
  width: 100%;
  height: 27em;
  font-size: 8px;
}



.slide
{
  color: white;
  width: 100%;
}
.service-list-detail
{
  display: inline-table;
  width: 100%;
  height: 100%;
}
.service-info-line
{
  display: flex;
  width: 100%;
  height: 2em;
  margin-bottom: 1em;
  align-items: center;
  font-weight: 700;
  box-sizing: border-box;
  border-bottom: 1px solid white;

}
.large-area
{
  height: 8em;
}
.service-info-line .title-row-ser
{
  color: white;
  align-items: center;
  width: 20%;
  text-align: left;
  margin-left: 1em;
}
.service-info-content
{
  width: 100%;
  color: white;
}
#title-service
{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: white;
}
#title-service.desktop
{
  font-size: 16px;
}
#title-service.tablet
{

}
#title-service.mobile
{
  font-size: 8px;
}

.padding-title
{
  padding-left: 20%;
}





@font-face {
font-family: "PlayfairDisplay-Bold";
src: url("../../../assets/PlayfairDisplay-Bold.ttf");
}
@font-face {
font-family: "Drifttype";
src: url("../../../assets/Drifttype.ttf");
}
@font-face {
font-family: "Mesothelioma-Regular";
src: url("../../../assets/Mesothelioma-Regular.ttf");
}
</style>