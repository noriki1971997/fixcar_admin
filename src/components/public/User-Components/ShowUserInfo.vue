<template>
  <div class="info-context" :class="$mq">
   
    <div class="profile-title" :class="$mq">
      <h1 :class="$mq">Hồ Sơ</h1>
    </div>

    <vue-flip :active-click="isAbleClickPanel" class="user-info" width="" height="" :class="$mq">
      <div slot="front" @click="frontClick" :class="$mq">

        <div class="avatarZone" :class="$mq">
          <mq-layout mq="tablet+">
            <avatar :image="getAvatar()" :size="102" ></avatar>
          </mq-layout>
          <mq-layout mq="mobile">
            <avatar :image="getAvatar()" :size="48" ></avatar>
          </mq-layout>
          <h5 id="id-user">ID:{{user_data.id}}</h5>
        </div>

        <div  id="provider-status" :class="$mq">
          <a><span :class="$mq" :style="{backgroundColor:colorProvider} ">Provider</span></a>    
        </div>

        <div class="basic-info" :class="$mq">
          <span class="info-line" :class="$mq"><i class="fas fa-paperclip icon-info"></i><a :class="$mq">{{user_data.Name}}</a></span>
          <span class="info-line" :class="$mq"><i class="far fa-envelope icon-info"></i><a :class="$mq">{{user_data.Email}}</a></span>
          <span class="info-line" :class="$mq"><i class="fas fa-mobile-alt icon-info"></i><a :class="$mq">{{user_data.PhoneNumber}}</a></span>
          <span class="info-line" :class="$mq"><i class="fas fa-birthday-cake icon-info"></i><a :class="$mq">{{user_data.Birthday}}</a></span>
          <span class="info-line" :class="$mq">
            <i class="fas fa-map-marked-alt icon-info"></i>
            <div class="address" :class="$mq">{{user_data.Address_detail}}</div>
          </span>
          <span class="info-line" :class="$mq">
            <i class="fas fa-key icon-info"></i>
            <a class="activeBtn">
              <ToggleButton :value="Status">
              </ToggleButton>
            </a>
          </span>
          <span :class="$mq" class="info-line note-click" @mouseover="isAbleClickPanel=true" @mouseout="isAbleClickPanel=false">Click để xem thông tin nhà cung cấp >></span>
        </div>

      </div>

      <div slot="back"
           @click="backClick" 
           :class="$mq"
           :style="{height:heightBack}">


        <div class="not-provider" v-show="!isProvider">
          <a>Người dùng chưa đăng kí trở thành nhà cung cấp</a>
        </div>

        <div class="provider" v-show="isProvider" :class="$mq">

          <div class="provider-line" :class="$mq">
            <span :class="$mq">Tên Cửa hàng:</span>
            <div class="content-info-provider" :class="$mq">{{provider_data.Name}}</div>
          </div>

          <div class="provider-line" :class="$mq">
            <span :class="$mq">Số chứng minh thư:</span>
            <div class="content-info-provider" :class="$mq">{{provider_data.id_personal}}</div>
          </div>

          <div class="provider-line" :class="$mq">
            <span :class="$mq">Số điện thoại:</span>
            <div class="content-info-provider" :class="$mq">{{provider_data.PhoneNumber}}</div>
          </div>

          <div class="provider-line" :class="$mq">
            <span :class="$mq">Mở cửa:</span>
            <div class="content-info-provider" :class="$mq">{{provider_data.OpenTime}}</div>
          </div>

          <div class="provider-line" :class="$mq">
            <span :class="$mq">Đóng cửa:</span>
            <div class="content-info-provider" :class="$mq">{{provider_data.CloseTime}}</div>
          </div>

          <div class="provider-line" :class="$mq">
            <span :class="$mq">Địa chỉ:</span>
            <div :style="{height:'3em'}"class="content-info-provider" :class="$mq">{{provider_data.Address}}</div>
          </div>

        </div>

        <div class="back-click" :class="$mq">
            <span :class="$mq" @mouseover="isAbleClickPanel=true" @mouseout="isAbleClickPanel=false">Click để trở về >></span>
        </div>

      </div>
    </vue-flip>
  
    <transition name="fade-flipper">
      <div class="slide-imgservice" v-show="flipper" :class="$mq">
       <h3 class="title-provider-picture" :class="$mq">Một số hình ảnh</h3>
       <swiper ref="awesomeSwiperA" :options="swiperOption" class="swiper-wrap" :class="$mq">
          <swiper-slide v-for="(img,index) in provider_data.ServicesImg" :key="index" class="each-slide">
            <div class="image-servicelist" :style="{backgroundImage:'url('+img+')'}">             
            </div>
          </swiper-slide>         
        <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>   
      </div>
    </transition>

    <mq-layout mq="desktop">
      <ListService 
        :class="$mq" 
        class="listService-wrap" 
        :showList="flipper" 
        :services="services">
      </ListService>
    </mq-layout>


  </div>
  
</template>

<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-clock-simple/dist/vue-flip.min.js"></script>
<script type="text/javascript">
  Vue.use(VueFlip);
</script>

<script>
import Avatar from 'vue-avatar-component'
import ToggleButton from '../ToggleButton.vue'
import ListService from './ListService.vue'
import VueFlip from 'vue-flip';
import GmapCustomMarker from 'vue2-gmap-custom-marker';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import customDialog from '../CustomDialog.vue'
export default {
  name: 'ShowUserInfo',
  data(){
  	return{
      ID:this.$route.params.userid,
      Status:this.$route.params.status,
      user_data:{
        avatar:"",
        id:0,
        Address_str:"",
        Address_detail:"",
        Name:"",
        Email:'',
        Birthday:'',
        PhoneNumber:'',
        Address_str:"",
        Address_detail:"",
        isProvider: false,
        status:'',
      },

      provider_data:{
        Name:"",
        id_personal:"",
        PhoneNumber:"",
        OpenTime:"",
        CloseTime:"",
        Address:"",
        Address_str:"",
        ServicesImg:[]
      },


      flipper:false,
      isAbleClickPanel:false,
      swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
       },
      services:[],

  	};
  },
  computed:{
  	info_context_height:function()
    {
      if(this.user_data.isProvider)
      {
        return '100em';
      } 
      return '60em';
    },

    isProvider()
    {
      return this.user_data.isProvider;
    },

    colorProvider()
    {
      if(this.user_data.isProvider)
      {
        return '#4cd137';
      }
      return '#a3a1a1';
    },

    userStatus()
    {
      return !!this.user_detail.status;
    },

    heightBack()
    {
      return this.$mq ==='mobile' ? '18em' : '34em'
    },

    
  },
  watch:{
    'isProvider':function(newVal,oldVal)
    {
      if(newVal = true)
      {
         this.$store.dispatch('user_detail/getProviderDetail',this.$route.params.userid)
        .then(resp => 
        { 
          this.provider_data = resp;
        })
        .catch(err => console.log(err)); 


        this.$store.dispatch('user_detail/getProviderServices',this.$route.params.userid)
        .then(resp => 
          { 
            this.services = resp;
          })
        .catch(err => console.log(err)); 

      }
    },

    'user_data.Address_str':function(newVal,oldVal)
    {
      this.$store.dispatch('user_detail/getAddressFunction',newVal)
      .then(resp => 
        { 
          this.user_data.Address_detail += resp;

        })
      .catch(err => console.log(err));
    },

    'provider_data.Address_str':function(newVal,oldVal)
    {
      this.$store.dispatch('user_detail/getAddressFunction',newVal)
      .then(resp => 
        { 
          this.provider_data.Address = resp;
        })
      .catch(err => console.log(err));
    }


     
  },
  components:{
  Avatar,ToggleButton,VueFlip,GmapCustomMarker,swiper,swiperSlide,ListService,customDialog
  },
  methods:{
    frontClick()
    {
      this.flipper=(this.isAbleClickPanel)?true:false;
    },
    backClick()
    {
      this.flipper=(this.isAbleClickPanel)?false:true;
    },

    getAvatar()
    {
      return this.user_data.avatar;
    },


  },
  created:function()
  {
    this.$store.dispatch('user_detail/getUserDetail',this.$route.params.userid)
    .then(resp => 
      { 
        this.user_data = resp;
      })
    .catch(err => console.log(err));

  }
 };
</script>
<style>
  /*title user info---------------------------------------------------------------*/
  .profile-title{
    display: inline-block;
    width: 100%;
    text-align: center;

  }
  .profile-title h1
  {
    position: relative;
    margin-left: auto;
    margin-right: auto;      
    text-align: center; 
    color: #f5f6fa;
    border: 0.5px solid #718093;
    background-color: rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.3);
  }
  .profile-title h1.desktop
  {
    border-radius: 2em;
    padding: 0.3em;
    width: 18em;
  }
  .profile-title h1.tablet
  {
    border-radius: 2em;
    padding: 0.2em;
    width: 10em;
  }
  .profile-title h1.mobile
  {
    border-radius: 2em;
    padding: 0.3em;
    width: 10em;
    font-size: 16px;
  }



  .info-context
  {   
    color: white;
    display: flex;
    width: 100%;
  }
  .info-context.desktop
  {
    height: 100em;
    max-height: 100em;
  }
  .info-context.tablet
  {
    height: 100em;
    max-height: 100em;
  }
  .info-context.mobile
  {
    height: 100em;
    max-height: 100em;
  }

  .user-info
  {
    position: absolute;
  }
  .user-info.desktop
  {
    width: 30%;
    height: 30em;
    font-size: 12px;
    top: 15em;
    left: 10%;
  }
  .user-info.tablet
  {
    width: 60%;
    height: 30em;
    font-size: 10px;
    top: 10em;
    left: 20%;
  }
  .user-info.mobile
  {
    width: 60%;
    height: 30em;
    font-size: 12px;
    top: 8em;
    left: 20%;
  }
  /*Flip----------------------------------------------------------------------------*/
  .front
  {
    border-radius: 12px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.3);
  }





  .back
  {  
    width: 100%;
    background-color: #000000;
    border-radius: 12px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.3);
  } 
  /*responsive-----*/

  /*responsive-----*/
  .note-click
  {
    margin-top: 1em;
    color: white;
    margin-left: auto;
    margin-right: auto;   
  }
  .note-click.desktop
  {
    font-size: 14px;
  }
  .note-click.tablet
  {
    font-size: 14px;
  }
  .note-click.mobile
  {
    font-size: 8px;
  }
  /*responsive-----*/



  .back-click
  {
    color: white;
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
  }
  .back-click span.desktop
  {
    font-size: 12px;
  }
  .back-click span.tablet
  {
    font-size: 10px;
  }
  .back-click span.mobile
  {
    font-size: 8px;
  }
/*------------------------------------------------------------------------------------*/


  .avatarZone
  {
    align-items: center;
    text-align: center;
    background-image: url('../../../assets/profileBG.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 6px;
  }
  .avatarZone.desktop
  {
    height: 23%;
  }
  .avatarZone.tablet
  {
    height: 23%;
  }
  .avatarZone.mobile
  {
    height: 5.5em;
  }




  .logo-provider
  {
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;
    background-image: url('../../../assets/logo_provider.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 6px;
    background-color: white;
  }
  .logo-provider.desktop
  {
    height: 35%;
  }
   .logo-provider.tablet
  {
    height: 35%;
  }
   .logo-provider.mobile
  {
    height: 20%;
  }



  .logo-provider h4
  {
    position: absolute;
    right: 1em;
    top: -.8em;
  }
   .logo-provider h4.desktop
  {
    font-size: 18px;
  }
   .logo-provider h4.tablet
  {
   font-size: 18px;
  }
   .logo-provider h4.mobile
  {
   font-size: 8px;
  }




  .not-provider
  {
    position: absolute;
    bottom: 6em;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 10em;
  }
  
  .not-provider a
  {
    color: white;
    font-size: 12px;
  }

  #id-user{
    position: relative;
    margin-top: 2px; 
    color:black;
    font-size: 1.5em;
    margin-bottom: 0;
  }
/*PROVIDER-----------------------------------------------------------------*/
  .provider
  {
    width: 100%;
    position: absolute;
  }
  .provider.desktop
  {
    top: 2%;
  }
  .provider.tablet
  {
    top: 1%;
  }
  .provider.mobile
  {
    height: 20%;
    top: 1%;
  }





  .provider-line
  {
    width: 96%;
  }
  .provider-line.desktop
  {
    height: 3.8em;
    margin-bottom: 1em;
  }
  .provider-line.tablet
  {
    height: 3em;
    margin-bottom: 1.2em;
  }
  .provider-line.mobile
  {
    height: 2em;
    margin-bottom: 0.5em;
  }




  .provider-line span
  {
    color: #D7BDE2;
    margin-bottom: 1em;
    margin-left: 1em;
  }
  .provider-line span.desktop
  {
    font-size: 14px;
  }
  .provider-line span.tablet
  {
    font-size: 12px;
  }
  .provider-line span.mobile
  {
    font-size: 8px;
  }




  .content-info-provider
  {    
    color: white;
    font-weight: 600;
    border-radius: 2px;
    align-items: center;
    display: grid;
    padding-left: 2em;
    padding-right: 2em;
    margin-left: 1em;
    margin-top: 0.5em;
    background-color: none;
  }
  .content-info-provider.desktop
  {
    height: 2.4em;
  }
  .content-info-provider.tablet
  {
    height: 2.4em;
  }
  .content-info-provider.mobile
  {
    height: 2em;
    font-size: 8px;
  }




  .icon-map
  {
    color:white;
    position: absolute;
    right: .3em;
    bottom: 0.6em;
  }
/*-------------------------------------------------------------------------*/
  .basic-info{
    display: inline-grid;   
    width: 100%;
    border-color: #f349eb;
    border-radius: 0.5em;
    box-sizing:border-box;
  }
  .basic-info.desktop
  {
    margin-top: 0.8em;
    font-size: 1.5em;
  }
  .basic-info.tablet
  {
    margin-top: 0.8em;
    font-size: 1.5em;
  }
  .basic-info.mobile
  {
    margin-top: 0.4em;
    font-size: 8px;
  }



  .info-line{
    display: inline-table;
  }
  .info-line.desktop{
    padding: 0.5em;

  }
  .info-line.tablet{
    padding: 0.5em;

  }
  .info-line.mobile{
    padding: 0.3em;
  }
 


  .info-line a.desktop
  {
    font-size: 16px;
  }
  .info-line a.tablet
  {
    font-size: 16px;
  }
  .info-line a.mobile
  {
    font-size: 8px;
  }






  .address
  {
    color: #dff9fb;  
    display: flex;
    float: right;
    height: 3em;
    
  }
  .address.desktop
  {
    font-size: 16px;
    width: 86%;
  }
  .address.tablet
  {
    font-size: 16px;
    width: 85%;
  }
  .address.mobile
  {
    width: 86%;
    font-size: 8px;
  }



  .icon-info{
    color: #f5f6fa;
    align-items: center;
    text-align: center;
    width: 3em;
    }
  .basic-info a{
    color: #dff9fb;
  }

  #provider-status a span
  {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #f7f1e3;
    border-radius: 1.5em;
  }
  #provider-status a span.desktop
  {
    padding-right: 0.7em;
    padding-left: 0.7em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    font-size: 1.2em;
  }
  #provider-status a span.tablet
  {
    padding-right: 0.7em;
    padding-left: 0.7em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    font-size: 1.2em;
  }
  #provider-status a span.mobile
  {
    padding-right: 0.2em;
    padding-left: 0.2em;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
    font-size: 8px;
  }

  #provider-status{
    text-align: center;
  }
  #provider-status.desktop
  {
     margin-top: 0.8em;
  }
   #provider-status.tablet
  {
     margin-top: 0.8em;
  }
   #provider-status.mobile
  {
     margin-top: 0.2em;
  }
  .activeBtn
  {
    position: absolute;
  }


/*Slide-servicelist-------------------------------------------------------------------*/
/*title*/
.title-provider-picture
{
  font-family: Aeonik, sans-serif;
  font-weight: 400;
  color: white;
}
.title-provider-picture.desktop
{
  font-size: 1.3em;
}
.title-provider-picture.tablet
{
  font-size: 1em;
}
.title-provider-picture.mobile
{
  font-size: .5em;
}



.fade-flipper-enter-active, .fade-leave-active {
  transition:  opacity 0.8s;
}
.fade-flipper-enter, .fade-flipper-leave-to {
  opacity: 0;
}

.slide-imgservice
{
  position: absolute;
  border-radius: 10px;
  transition: 0.4s;
}
.slide-imgservice.mobile
{
  left: 20%;
  top: 20em;
  width: 60%;
  height: 10em;
}
.slide-imgservice.tablet
{
  left: 20%;
  top: 28em;
  width: 60%;
  height: 15em;
}
.slide-imgservice.desktop
{
  left:10%;
  top: 36em;
  width: 30%;
  height: 18em;
}


.swiper-wrap
{
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
}
.each-slide{
  font-size: 38px;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.3);
}
.image-servicelist
{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
/*------------------------------------------------------------------------------------*/

/*ListService-------------------------------------------------------------------------*/
.listService-wrap
{
  position: absolute;
  background-color: white;
}
.listService-wrap.desktop
{
  width: 100%;
  right: 10%;
  top: 10em;
}
.listService-wrap.tablet
{
  left: 20%;
  top: 50em;
  width: 100%;
}
.listService-wrap.mobile
{
  top: 33em;
  width: 100%;
  left: 20%;
}
/*------------------------------------------------------------------------------------*/

</style>

